// Jquery Detect idle time
$(function() {
  idleTimer = null;
  idleState = false;
  idleWait = 1000; // 3 seconds

  $("#welcome").hide();
  $("*").bind("mousemove keydown scroll click", function() {
    clearTimeout(idleTimer);
    if (idleState === true) {
      $("#welcome")
        .show()
        .fadeOut();
    }

    idleState = false;
    idleTimer = setTimeout(function() {
      idleState = true;
    }, idleWait);
  });
  $("body").trigger("mousemove keydown scroll click");
});
