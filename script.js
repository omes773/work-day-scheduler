
function renderTime() {
    $("#currentDay").text(dayjs().format("MMM D, YYYY [at] hh:mm:ss a"));
}
renderTime();
setInterval(renderTime, 1000);


