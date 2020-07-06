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




Sortable.create(el, {
  group: "localStorage-example",
  store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get: function (sortable) {
          var order = localStorage.getItem(sortable.options.group.name);
          return order ? order.split('|') : [];
      },

      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set: function (sortable) {
          var order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, order.join('|'));
      }
  }
})