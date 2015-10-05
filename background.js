// setup ui
$(".board-header").append("<button id='play' style='margin-top:-4px; width: 100px;'>► Play</button>");
$(".js-list").css("width","100px");

var count = 0;
$("#play").click(function() {
  window.setInterval(function () {

    // play note
    $(".list").eq(count).find(".list-card").each(function() {
      var instrument = $(this).find(".card-label").attr("title");
      var volume = parseInt($(this).find(".list-card-title").html().split(">")[2]);
      var audio = new Audio();
      audio.src = chrome.extension.getURL("audio/" + instrument + ".wav");
      audio.volume = volume/10;
      audio.play();
    });

    // fix ui
    $(".js-list").css("width","100px");
    $(".list").css("background", "#e2e4e6");
    $(".list").eq(count).css("background", "#FF7B7B");

    if((count+1) == $(".list").length){
      count = 0;
    }else{
      count ++;
    }

  }, 300);
});
