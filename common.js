var presenters = ["Aさん", "Bさん", "Cさん", "Dさん", "Eさん", "Fさん"];

$(function () {

    Sortable.create($('.list')[0]);

});

// $('#double').on('click', function () {
//     $(this).css('pointer-events', 'none');
//     $(this).css('readonly', true);
// });


$('#check').change(function () {
    // チェックが入っていたら有効化
    if ($(this).is(':checked')) {
        // ボタンを有効化
        $('#button').prop('disabled', false);
    } else {
        // ボタンを無効化
        $('#button').prop('disabled', true);
    }
});



$("#check").on("click", function () {
    var v = $(this).val();
    sessionStorage.setItem('key', v);
});

$(function () {
    $("check").click(function () {
        if (this.checked) {
            $("button").html("<button id='button' disabled='true' value='送信する' onclick='location.href='dest''>送信</button>");
        } else {
            $("button").html("送信");
        }
    });
});