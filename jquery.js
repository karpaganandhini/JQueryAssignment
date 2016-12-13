

$(function(){


$('#button').on('click',function(){
var val=$('#search').val();
var link='http://www.omdbapi.com/?s='+val;
$.ajax({
type:'GET',
url:link,
success:function(year){

year.Search.map(function(item){

  $("#year").append("<p>Year Of Release:"+item.Year+"</p>")
  $("#year").append("<p>Title Of The Movie:"+item.Title+"</p>")
  $("#year").append('<div class="graphic"><img src='+item.Poster+'></div>');
});

}


});


});

});



