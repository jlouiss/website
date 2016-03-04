var quotes = [
    ['Never give up, and good luck will find you.',
     'Falkor'],
    ['Impossibility is a kiss away from reality.',
     'Amanita "Neets"'],
    ['Things, when magnified, are forgeries of happiness.',
     'Abraham Joshua Heshel'],
    ['The most important thing is to enjoy your life - to be happy - it\'s all that matters.',
     'Audrey Hepburn '],
    ['Life is really simple, but we insist on making it complicated',
     'Confucius'],
    ['Life isn\'t about finding yourself.<br> Life is about creating yourself.',
     'George Bernard Shaw'],
    ['In the end, it\'s not the years in your life that count. It\'s the life in your years.',
     'Abraham Lincoln'],
    ['Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
     'Marcus Aurelius'],
    ['I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life.<br>And that is why I succeed.',
     'Michael Jordan'],
    ['Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
    'Mark Twain'],
    ['Nothing will work unless you do.',
     'Maya Angelou'],
    ['I don\'t have talent, I have tenacity',
     'Henry Collins']
];

var dist = Array(8).join().split('');

function generate() {
    var rand = Math.floor(Math.random() * quotes.length);
    console.log(rand);
    if (dist.indexOf(rand) >= 0) generate();
    else {
        var quote = quotes[rand][0],
            author = '- ' + quotes[rand][1] + ' -';
        $('#quote').html(quote);
        $('#author').html(author);
        dist.unshift(rand);
        dist.pop();
        console.log(dist);
    }
}

$(document).ready(function () {
    generate();
    $('button').click(function () {
        generate()
    });
});
