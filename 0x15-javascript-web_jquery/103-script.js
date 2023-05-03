$(function () {
  function translateHello() {
    let languageCode = $('#language_code').val();
    let apiUrl = `https://fourtonfish.com/hellosalut/?lang=${languageCode}`;
    $.get(apiUrl, function (data) {
      $('#hello').text(data.hello);
    }, 'json');
  }

  $('#btn_translate').click(translateHello);
  $('#language_code').keydown(function (event) {
    if (event.keyCode === 13) {
      translateHello();
    }
  });
});
