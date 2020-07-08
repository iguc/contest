$(function ($) {
  $('#rater').change(function () {
    $('.button').css('background', '#3CB371');
    $('.button').css('color', '#fefefe');
    $('.button').css('pointer-events', 'auto');
  });
});
$(function ($) {
  $('.button').on('click', function () {
    $('.button').text('');
    $('.box').css('pointer-events', 'none');
    $('#rater').css('pointer-events', 'none');
    $('.button').css('pointer-events', 'none');

    var request = new XMLHttpRequest();
    request.open("GET", 'https://9ai1mdy8fi.execute-api.ap-northeast-1.amazonaws.com/db?foo=13456qweasd/', true);
    request.send();

   //window.location.href = 'https://9ai1mdy8fi.execute-api.ap-northeast-1.amazonaws.com/db?foo=13456qweasd/';
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
function put_result(ui) {
  $("#result_box").html("現在の要素のIDの順番は下記のとおりです。<br />");

  $("#box").find(".card").each(function (index, element) {
    var id = $(this).attr("id");
    $("#result_box").append(id + "<br />");
  });

  if (ui) { // もしドラッグ後であれば
    // ドラッグされた要素のIDを取得
    var dragged_id = ui.item[0].id;
    $("#result_box").append("ドラッグされた要素のIDは" + dragged_id + "です<br />");
  }
}