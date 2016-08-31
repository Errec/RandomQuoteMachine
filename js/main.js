$(document).ready(function(){
  $(".btn").click(function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(getQuote) {
      $("#quote").html(getQuote[0].content);
      $("#author").text(getQuote[0].title);
    });
  });
});
