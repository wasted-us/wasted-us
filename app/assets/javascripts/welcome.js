$(function() {
  var paused = false;

  $('#main-form').on('submit', function(event) {
    event.preventDefault();

    $('#welcome-page').hide();
    $('#counter-page').show();

    var counter = 0;
    var counter_display;
    var num_people = $('#num-people').val() || 0;
    var average_salary = $('#salary').val();
    var salary_per_second = average_salary / ( 2000 * 60 * 60 );

    $('#flipcountdown').flipcountdown({
      size:"lg",
      tick: function() {
        if (!paused) {
          counter += (num_people * salary_per_second);
          counter_display = parseFloat(counter).toFixed(2);
        }

        return counter_display;
      }
    });

    document.addEventListener("mousemove", magicMouse);
  });

  $("#salary")
    .bind("slider:ready slider:changed", function (event, data) {
      $(this)
        .nextAll(".output:first")
        .html('Average Salary: $'+data.value.toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && !((a.length - i) % 3) ? ',' + c : c;
      }));
    });

  $('#end-meeting').on('click', function() {
    paused = true;
  });
});

// hide elements when inactive
var timeout;
var isHidden = false;

function magicMouse() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function() {
    // hide stuff
    if (!isHidden) {
      $('#end-meeting').stop().fadeOut(500);
      isHidden = true;
    }
  }, 2000);
  // unhide stuff
  if (isHidden) {
    $('#end-meeting').stop().fadeIn(500);
    isHidden = false;
  }
};