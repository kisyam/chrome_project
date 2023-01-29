const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    author: "Dr. Seuss",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote:
      "It's not enough that we do our best; sometimes we have to do what's required.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "Desire creates the power.",
    author: "Raymond Holliwell",
  },
  {
    quote: "Talk of nothing but business, and dispatch that business quickly.",
    author: "Aldus Manutius",
  },
  {
    quote:
      "No matter how lonely you get or how many birth announcements you receive, the trick is not to get frightened. There's nothing wrong with being alone.",
    author: "Wendy Wasserstein",
  },
  {
    quote:
      "While the State exists, there can be no freedom. When there is freedom there will be no State.",
    author: "Lennin",
  },
  {
    quote:
      "Design is directed toward human beings. To design is to solve human problems by identifying them and executing the best solution.",
    author: "Ivan Chermayeff",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
