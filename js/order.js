$(document).ready(function(){

    $('.feedback').click(function () {
        var data;
        var phone;
        var fio;
        var text = null;

        var сollection_fio = $("input[name*='fio']");
        сollection_fio.each(function (index) {
            if(($(this).val() != null) && ($(this).val() != ""))
                fio = $(this).val();
        });

        var сollection_phone = $("input[name*='tel']");
        сollection_phone.each(function (index) {
            console.log($(this).val());
            if(($(this).val() != null) && ($(this).val() != ""))
                phone = $(this).val();
        });

        var сollection_text = $("textarea[name*='message']");
        сollection_text.each(function (index) {
            if(($(this).val() != null) && ($(this).val() != ""))
                text = $(this).val();
        });
         data = {
             'name': fio,
             'phone': phone,
             'text': text,
         };

        $.ajax({
            type: 'POST',
            url: 'email_db.php',
            data: $.param(data),
            success: function (result) {
                alert('Спасибо! Наши менеджеры свяжутся с Вами в ближайшее время!');
            },
            error: function (xhr, textStatus) {
                alert('Возникла ошибка в ходе выполнения скрипта! Свяжитесь с администратором!');
            }
        });
    });
});
