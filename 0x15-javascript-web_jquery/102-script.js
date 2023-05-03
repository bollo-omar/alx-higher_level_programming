$(document).ready(function() {
  $("input#btn_translate").click(function() {
    let languageCode = $("input#language_code").val();
    let apiUrl = "https://www.fourtonfish.com/hellosalut/hello/" + languageCode;
    
    $.get(apiUrl, function(response) {
      $("div#hello").text(response.hello);
    });
  });
});
