$(function() {
  const input = $('#language_code');
  const button = $('#btn_translate');
  const hello = $('#hello');

  function translateHello() {
    $.getJSON(`https://www.fourtonfish.com/hellosalut/hello/${input.val()}`)
      .done(data => hello.text(data.hello))
      .fail((jqXHR, textStatus, errorThrown) => hello.text(`Error: ${textStatus} - ${errorThrown}`));
  }

  button.on('click', translateHello);
  input.on('keydown', event => event.which === 13 && translateHello());
});