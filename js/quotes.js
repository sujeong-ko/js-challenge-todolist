
function handleQuotes() {
    const quotes = [
        {
            quote: "Success is achieved by developing our strengths, not by eliminating our weaknesses.", 
        author:"Marilyn vos Savant"},
        {
            quote: "You only live once, but if you do it right, once is enough.", 
        author:"Mae West"},
        {
            quote: "Never go on trips with anyone you do not love.", 
        author:"Hemmingway"},
        {
            quote: "We wander for distraction, but we travel for fulfilment.", 
        author:"Hilaire Belloc"},
        {
            quote: "The way to get started is to quit talking and begin doing.", 
        author:"Walt Disney"},
        {
            quote: "Only a life lived for others is a life worthwhile.", 
        author:"Albert Einstein"},
        {
            quote: "Travel expands the mind and fills the gap.", 
        author:"Sheda Savage"},
        {
            quote: "Life is either a daring adventure or nothing at all.", 
        author:"Helen Keller"}, 
        {
            quote: "Without music, life would be a mistake.", 
        author:"Friedrich Nietzsche"},
        {
            quote: "So many books, so little time.", 
        author:"Frank Zappa"}
        ]
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:nth-child(2)");
    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}


const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.png", "11.png", "12.jpeg" 
];

const quoteBox = document.querySelector("#quote");
const bgImage = document.createElement("img");
quoteBox.appendChild(bgImage);

function handleQuoteBoxBg() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `images/${chosenImage}`;
}

handleQuotes();
setInterval(handleQuotes, 5000);
handleQuoteBoxBg();
setInterval(handleQuoteBoxBg, 5000);