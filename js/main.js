var urlBase = "https://twitter.com/intent/tweet?text=";

/*
* This function trim the extra white space and set quote and author as tweet text filling the Twitter intent field "text="
*/
function tweetText() {
    $("a[href^='https://twitter.com/intent/tweet?text=']").prop("href", urlBase + $("#quote").text().trim() + "%0D%0A" + $("#author").text().trim());
}

/*
* This function get the Json from quotesondesign.com API and inflates the HTML with quote and author text
*/
function getNewQuote() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(getQuote) {
  $("#quote").html(getQuote[0].content);
  $("#author").text("- " + getQuote[0].title);
  tweetText();
  });
}

$(document).ready(function(){
  getNewQuote();
  $('#quote-btn').on('click', getNewQuote);
});







