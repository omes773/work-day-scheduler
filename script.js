
function renderTime() {
    $("#currentDay").text(dayjs().format("MMM D, YYYY [at] hh:mm:ss a"));
}
renderTime();
setInterval(renderTime, 1000);

var time = ["hour-9","hour-10","hour-11","hour-12","hour-13","hour-14","hour-15", "hour-16", "hour-17"]

var saveButton = $("<button>");
saveButton.text("save");

saveButton.on("click", function() {
  $(".past").append(saveButton);

  var time = localStorage.getItem("time") ? 
JSON.parse(localStorage.getItem("time")) : [];

for (var i = 0; i < time.length; i++) {
  
  
}
});
