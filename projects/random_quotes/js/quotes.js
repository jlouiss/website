var quotes = [{
    quote: 'Never give up, and good luck will find you.',
    author: 'Falkor'
}, {
    quote: 'Impossibility is a kiss away from reality.',
    author: 'Amanita "Neets"'
}, {
    quote: 'Things, when magnified, are forgeries of happiness.',
    author: 'Abraham Joshua Heshel'
}, {
    quote: 'The most important thing is to enjoy your life - to be happy - it\'s all that matters.',
    author: 'Audrey Hepburn '
}, {
    quote: 'Life is really simple, but we insist on making it complicated',
    author: 'Confucius'
}, {
    quote: 'Life isn\'t about finding yourself.<br> Life is about creating yourself.',
    author: 'George Bernard Shaw'
}, {
    quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
    author: 'Abraham Lincoln'
}, {
    quote: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    author: 'Marcus Aurelius'
}, {
    quote: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life.<br>And that is why I succeed.',
    author: 'Michael Jordan'
}, {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
    author: 'Mark Twain'
}, {
    quote: 'Nothing will work unless you do.',
    author: 'Maya Angelou'
}, {
    quote: 'I don\'t have talent, I have tenacity',
    author: 'Henry Collins'
}];

var buffer = Array(8).join('.').split('.');

function generate() {
    // random-looking behavior: the function uses a buffer to store the last 8
    // quotes to avoid too frequent repetitions
    var randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(buffer);
    console.log(randomIndex);

    if (buffer.indexOf(randomIndex) >= 0) {
        generate();
    } else {
        var quote = quotes[randomIndex].quote,
            author = '- ' + quotes[randomIndex].author + ' -';

        $('#quote').html(quote);
        $('#author').html(author);

        buffer.push(randomIndex);
        buffer.shift();

        console.log(buffer);
    }
}

$(document).ready(function() {
    generate();
    $('button').click(function() {
        generate();
    });
});
