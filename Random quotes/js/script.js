(function() {
  const quotes = [
    {
      quote: `I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
      author: `Marilyn Monroe`
    },
    {
      quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
      author: `William W. Purkey`
    },
    {
      quote: `You only live once, but if you do it right, once is enough.`,
      author: `Mae West`
    },
    {
      quote: `In three words I can sum up everything I've learned about life: it goes on.`,
      author: "Robert Frost"
    },
    {
      quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
      author: `Oscar Wilde`
    },
    {
      quote: `Insanity is doing the same thing, over and over again, but expecting different results.`,
      author: `Narcotics Anonymous`
    }
  ];

  const btn = document.getElementById("generate-btn");
  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    document.getElementById("quote").textContent = quotes[random].quote;
    document;
    document.querySelector(".quote-author").textContent = quotes[random].author;
  });
})();
