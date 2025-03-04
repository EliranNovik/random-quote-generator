import React, { useState } from "react";
import quotes from "./QuotesDatabase.js";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomQuoteIndex = (currentIndex, quotesArray) => {
  if (quotesArray.length <= 1) return currentIndex;
  let index = Math.floor(Math.random() * quotesArray.length);
  while (index === currentIndex) {
    index = Math.floor(Math.random() * quotesArray.length);
  }
  return index;
};

const RandomQuoteGenerator = () => {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [colors, setColors] = useState({
    backgroundColor: getRandomColor(),
    quoteColor: getRandomColor(),
    buttonColor: getRandomColor(),
  });

  const changeQuote = () => {
    const newIndex = getRandomQuoteIndex(quoteIndex, quotes);
    setQuoteIndex(newIndex);
    setColors({
      backgroundColor: getRandomColor(),
      quoteColor: getRandomColor(),
      buttonColor: getRandomColor(),
    });
  };

  if (!quotes[quoteIndex]) {
    return <div>Loading...</div>;
  }

  const { quote, author } = quotes[quoteIndex];

  return (
    <div
      style={{
        backgroundColor: colors.backgroundColor,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#fff",
        }}
      >
        <h1 style={{ color: colors.quoteColor, transition: "color 0.5s ease" }}>
          {quote}
        </h1>
        <p
          style={{
            color: colors.quoteColor,
            fontStyle: "italic",
            marginBottom: "20px",
            transition: "color 0.5s ease",
          }}
        >
          - {author}
        </p>
        <button
          onClick={changeQuote}
          style={{
            backgroundColor: colors.buttonColor,
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.5s ease",
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
