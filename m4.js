//-------------Font Resizer--------------//

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
  
    $("plustext").addEvent("click", function() {resizeText(1);});
    $("minustext").addEvent("click", function() {resizeText(-1);});
}

//--------------End of Font Resizer----------//



//--------------Background Switcher----------//

$(document).ready(function() {
    $('#background1').on('click', function() {
        document.getElementById("backgr").style.backgroundImage = "url('bikers.jpg')";
    })
    $('#background2').on('click', function() {
        document.getElementById("backgr").style.backgroundImage = "url('crowd.jpg')";
    })
    $('#background3').on('click', function() {
        document.getElementById("backgr").style.backgroundImage = "url('laneoptions.jpg')";
    })
});

//---------------End of Background Switcher--------//
