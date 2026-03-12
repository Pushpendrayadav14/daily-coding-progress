import React from "react";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different."
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>

      <h3>Developer Quotes</h3>

      {quotes.map((quote, index) => (
        <p key={index}>• {quote}</p>
      ))}
    </div>
  );
};

export default Home;