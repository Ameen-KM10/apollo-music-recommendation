/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'nblue': '#7FE5E5',
      'palepink': '#FFB6C1',
      'coral' : '#FFB6A1',
      'sred':'#E57F7F',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black':'#000000',
      'skyblue':'#B3E5FC',
      'grey50':'#F9FAFB',
    },
    extend:{
      animation: {
        blob: "blob 7s infinite",
        blob_a:"blob_a 40s infinite",
        blob_b:"blob_b 35s infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob_a : {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "20%": {
            transform: "translate(-300px, 50px) scale(1.1)",
          },
          "40%": {
            transform: "translate(-60px, 200px) scale(1.5)",
          },
          "60%": {
            transform: "translate(-30px, -200px) scale(1.3)",
          },
          "80%": {
            transform: "translate(150px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob_b : {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "20%": {
            transform: "translate(300px, -50px) scale(1.2)",
          },
          "40%": {
            transform: "translate(60px, -100px) scale(1.4)",
          },
          "60%": {
            transform: "translate(-30px, 90px) scale(1.3)",
          },
          "80%": {
            transform: "translate(50px, -40px) scale(1.1)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

