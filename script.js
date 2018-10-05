var quoteObject = {
    quotesList: [],
    addQuote: function(quote, author) {
        this.quotesList.push({
            quote: quote,
            author: author
        });
    },
    displayRandomQuotes: function() {
        var index = Math.floor(Math.random() * this.quotesList.length);
        console.log(this.quotesList[index].quote);
    }
};

// Just dummy data
var quote1 = 'Q1';
var quote2 = 'Q2';
var quote3 = 'Q3';
var quote4 = 'Q4';
var author1 = 'A1';
var author2 = 'A2';
var author3 = 'A3';
var author4 = 'A4';

quoteObject.addQuote(quote1, author1);
quoteObject.addQuote(quote2, author2);
quoteObject.addQuote(quote3, author3);
quoteObject.addQuote(quote4, author4);