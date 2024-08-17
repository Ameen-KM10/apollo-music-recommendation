import pandas as pd
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

app = Flask(__name__)
CORS(app, origins='*')

@app.route("/getmusic", methods=['GET'])
def users():
    file_path = 'music_data.json'

    # Load the JSON data from the file
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)

    # Display the data
    track_ids = data['track_id']
    track_names = data['track_name']
    artists = data['artist']
    return jsonify({
        "id": track_ids,
        "name" : track_names,
        "artist" : artists
    })

@app.route('/predict', methods=['POST'])
def predict():
    # Load datasets
    music_df = pd.read_csv('spotify_songs.csv')
    depression_df = pd.read_csv('depression_dataset.csv')

    # Normalize numerical features in the music dataset
    music_numerical_features = ['danceability', 'energy', 'loudness', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo', 'duration_ms']
    music_scaler = MinMaxScaler()
    music_df[music_numerical_features] = music_scaler.fit_transform(music_df[music_numerical_features])

    # Encode categorical features in the music dataset
    label_encoder = LabelEncoder()
    music_df['playlist_genre'] = label_encoder.fit_transform(music_df['playlist_genre'])
    music_df['playlist_subgenre'] = label_encoder.fit_transform(music_df['playlist_subgenre'])


    depression_df['Depression State'] = label_encoder.fit_transform(depression_df['Depression State'])
    depression_features = ['Sleep', 'Appetite', 'Interest', 'Fatigue', 'Worthlessness', 'Concentration', 'Agitation', 'Suicidal Ideation', 'Sleep Disturbance', 'Aggression', 'Panic Attacks', 'Hopelessness', 'Restlessness', 'Low Energy']
    depression_scaler = MinMaxScaler()
    depression_df[depression_features] = depression_scaler.fit_transform(depression_df[depression_features])
    
    X = depression_df[depression_features]
    y = depression_df['Depression State']
    
    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train a Random Forest Classifier
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)

    depression_to_music = {
    'No depression': {'valence': (0.7, 1), 'energy': (0.7, 1)},
    'Mild': {'valence': (0.4, 0.7), 'energy': (0.4, 0.7)},
    'Moderate': {'valence': (0.2, 0.4), 'energy': (0.2, 0.4)},
    'Severe': {'valence': (0, 0.2), 'energy': (0, 0.2)}
    }


    def filter_songs(depression_state, music_df, depression_to_music):
        criteria = depression_to_music[depression_state]
        filtered_songs = music_df[
            (music_df['valence'] >= criteria['valence'][0]) & (music_df['valence'] <= criteria['valence'][1]) &
            (music_df['energy'] >= criteria['energy'][0]) & (music_df['energy'] <= criteria['energy'][1])
        ]
    
        return filtered_songs
    
    def recommend_songs(filtered_songs, n=5):
        return filtered_songs.sample(n)


    def get_user_responses(depression_features, score):
        responses = {}
        for i in range(14):
            responses[depression_features[i]] = int(score[i])
        return responses
    
    def predict_depression_state(responses, model, scaler, feature_names):
        responses_df = pd.DataFrame([responses], columns=feature_names)
        responses_scaled = scaler.transform(responses_df)
        predicted_state = model.predict(responses_scaled)
        return label_encoder.inverse_transform(predicted_state)[0]

    if request.is_json:
        data = request.get_json()
        score = data['data']
        user_responses = get_user_responses(depression_features, score)
        predicted_state = predict_depression_state(user_responses, clf, depression_scaler, depression_features)
        recommended_songs = filter_songs(predicted_state, music_df, depression_to_music)
        recommendations = recommend_songs(recommended_songs)
        track_id = list(recommendations['track_id'])
        track_name = list(recommendations['track_name'])
        artist = list(recommendations['track_artist'])
        music_data = {
            "track_id" : track_id,
            "track_name" : track_name,
            "artist" : artist
        }

        file_path = 'music_data.json'

        with open(file_path, 'w') as json_file:
            json.dump(music_data, json_file, indent=4)

        print(f"Data has been written to {file_path}")
        

        return jsonify(music_data)
    else:
        return jsonify({"error": "Request must be JSON"}), 400

if __name__ == "__main__":
    app.run(debug=True, port=8080)
