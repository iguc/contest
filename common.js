var presenters = ["Aさん", "Bさん", "Cさん", "Dさん", "Eさん", "Fさん"];

$(function () {

    Sortable.create($('.list')[0]);

});

// $('#double').on('click', function () {
//     $(this).css('pointer-events', 'none');
//     $(this).css('readonly', true);
// });


$('#check').change(function() {
    // チェックが入っていたら有効化
    if ( $(this).is(':checked') ){ 
        // ボタンを有効化
        $('#button').prop('disabled', false);
    } else { 
        // ボタンを無効化
        $('#button').prop('disabled', true); 
    }
});