// $(function () {
//   Sortable.create($(".list")[0]);
// });
// Sortable.create($(".list")[0], {
//   animation: 110, // ミリ秒で指定
// });

// $(function($) {
//   $('.box').on('click', function() {
//     $('.box').css('background', '#edb54c');
//   });
// });


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
    $('.box').css('pointer-events', 'none');
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

$(function () {
  put_result();
  $("#box").sortable({
    placeholder: "ui-state-highlight",
    axis: "y", // ドラッグの方向を縦に固定
    "opacity": 0.5, // ドラッグ中の透明度
    "update": function (event, ui) { // ドラッグ完了後のコールバック
      put_result(ui);
    }
  });

});

// $('#datas').sortable({
//   update: function(){
//       var log = $(this).sortable("toArray");
//       $("#log").text(log);
//   }
// });