$(function () {
  Sortable.create($(".list")[0]);
});
Sortable.create($(".list")[0], {
  animation: 110, // ミリ秒で指定
});
$(function($) {
  $('#rater').change(function() {
    $('.button').css('background', '#3CB371');
    $('.button').css('color', '#fefefe');
    $('.button').css('pointer-events', 'auto');
  });
});
$(function($) {
  $('.button').on('click', function() {
    $('.button').text('');
    $('.list').css('pointer-events', 'none');
    $('#rater').css('pointer-events', 'none');
    $('.button').css('pointer-events', 'none');
  });
});
var animateButton = function (e) {
  e.preventDefault;
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  e.target.classList.add("animate");
};
var classname = document.getElementsByClassName("button");
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener("click", animateButton, false);  
};



$('#datas').sortable({
  update: function(){
      var log = $(this).sortable("toArray");
      $("#log").text(log);
  }
});