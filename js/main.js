var quote;
var author;
var urlBase = "https://twitter.com/intent/tweet?text=";

$(document).ready(function(){
  $(".btn").click(function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(getQuote) {
      quote = getQuote[0].content;
      author = getQuote[0].title;

      $("#quote").html(quote);
      $("#author").text(author);
      $("a[href^='https://twitter.com/intent/tweet?text=']").prop("href", urlBase + $("#quote").text().trim() + "%0D%0A" + $("#author").text().trim())
    });
  });
});



      // twttr.widgets.load();






