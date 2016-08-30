/*
$(document).ready(function(){
    $(".btn").click(function(){
        $("#quote").append(" <b>Appended text</b>.");
    });
});
*/
/*
$.ajax({
   url: 'http://api.forismatic.com/api/1.0',
   data: {
      format: 'jsonp'
   },
   error: function() {
      $('#quote-container').html('<p>An error has occurred</p>');
   },
   dataType: 'jsonp',
   success: function(parseQuote) {
      var $quote = $('#quote').text(response.quoteText);
      var $author = $('#author').text(response.quoteAuthor;);
      $('#quote-container')
         .append($quote)
         .append($author);
   },
   type: 'getQuote'
});
*/

/*
      <script type="text/javascript">
         $(document).ready(function() {
            $(".btn").click(function(parseQuote){
               $.getJSON('result.json', function(response) {
                  $('#quote').html('<p> Name: ' + response.quoteText + '</p>');
                  $('#author').append('<p>Age : ' + response.quoteAuthor+ '</p>');
               });
            });
         });
      </script>

      <script type="text/javascript" src="http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote"></script>

      http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote
*/

$('#btn1').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote').text(post.title);
      },
      cache: false
    });
  });




