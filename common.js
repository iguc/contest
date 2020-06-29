var presenters = ["Aさん", "Bさん", "Cさん", "Dさん", "Eさん", "Fさん"];

$(function () {

    Sortable.create($('.list')[0]);

});

$('#double').on('click', function () {
    $(this).css('pointer-events','none');
  });