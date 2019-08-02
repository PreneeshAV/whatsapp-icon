/**
Website : https://www.speaktech.in
Author : preneesh av

**/

$(document).ready(function() {
    whatsappGenerate({
        'number': '918891867579',
        'text' : 'Hi , i would like to '
});
})

function whatsappGenerate($setting) {
    var html = '<p><a target="_blank" href="https://api.whatsapp.com/send?phone='+$setting.number+'&amp;text='+$setting.text+'" class="img-icon-a nofocus whatsapp-icon-web">                                <img class="img-icon ccw-analytics" id="style-9" data-ccw="style-9" style="height:70px;" src="https://www.speaktech.in/themes/images/whatsapp-icon.png" alt="WhatsApp">                            </a></p>';

    $("body").append(html);
    $(".whatsapp-icon-web").css({
        'position': 'fixed',
        'bottom': '10px',
        'right': '60px',
        'z-index': '1000003',

    });
  }
