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


});

// hide elements when inactive
var timeout;
var isHidden = false;

function magicMouse() {
  $(function ()
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
};
