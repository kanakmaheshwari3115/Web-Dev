let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn');

let quotes = [
    {
        quote: 'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.' ,
        author: 'Voltaire' 
    },
    {
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' ,
        author: 'Ralph Waldo'
    },
    {
        quote: 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.' ,
        author: 'Stephen King'
    },
    {
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot'
    },
    {
        quote: 'That it will never come again is what makes life so sweet.',
        author: 'Emily Dickinson'
    },
    {
        quote: 'Don\'t let your happiness depend on something you may lose.',
        author: 'C.S. Lewis'
    } 
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})

