$(function(){
  $('input#btn_translate, input#language_code').on('click keypress', function(e) {
    if (e.type === 'click' || (e.type === 'keypress' && e.which === 13)) {
      const languageCode = $('input#language_code').val();
      const apiUrl = `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`;
      $.get(apiUrl, function(data) {
        $('div#hello').text(data.hello);
      });
    }
  });
});
