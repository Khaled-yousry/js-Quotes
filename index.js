//Use an array to hold the value of the quotes
const arrayOfQuotes = [
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "IBe the change that you wish to see in the world.",
  },
  {
    author: " Steve Jobs",
    quote:
      "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Martin Luther King Jr.",
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  },
];

function generateQuote() {
  const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.querySelector(
    "#quoteOutput"
  ).textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[random].author}`;
}
