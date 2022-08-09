const quotes = [
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
];
 
   const Quotebutton = document.querySelector('#quoteButton');
   function generate(){
    let sourceLength = quotes.length;

    let randomNumber = Math.floor(Math.random() * sourceLength);

    let newquote = quotes[randomNumber].quote;
    let newquoteauthor = quotes[randomNumber].author;

    let quotecontainer = document.getElementById('quotecontainer');quotecontainer.innerHTML = `<p>${newquote}</p> <p id="quoteGenius"> Author:-${newquoteauthor}</p>`;
   };