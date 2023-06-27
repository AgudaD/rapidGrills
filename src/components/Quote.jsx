import { useState } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-pink-400 px-10 text-white">
      <p>{quote} </p>
      <p className="w-full text-end">{author}</p>
      <button
        className="rounded-md border border-white px-6 py-2 hover:bg-[#f1f1f146]"
        onClick={getQuote}
      >
        Generate
      </button>
    </div>
  );
};

export default Quote;
