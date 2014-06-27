var paused = false;
var finished = $('#counter-page').data('finished') || false;

$(function() {

  $('#url').hide();

  var counter = $('#counter-page').data('cost') || 0;
  var counter_display;
  var num_people = $('#counter-page').data('participant-count') || 0;
  var average_salary = $('#counter-page').data('salary') || 90000;
  var salary_per_second = average_salary / ( 2000 * 60 * 60 );
  var meeting_id = $('#counter-page').data('id');

  $('#flipcountdown').flipcountdown({
    size:"lg",
    tick: function() {
      if (!paused && !finished) {
        counter += (num_people * salary_per_second);
        counter_display = parseFloat(counter).toFixed(2);

        $.ajax({
                url: '/meetings/' + meeting_id,
                type: 'PUT',
                data: 'meeting[cost]=' + counter_display
        });
      }

      if (finished) {
        counter_display = parseFloat(counter).toFixed(2);
      }

      return counter_display;
    }
  });

  if (!finished) {
    document.addEventListener("mousemove", magicMouse);
  } else {
    $('#end-meeting').hide();
    $('#ended-meeting-message').show();
  }

  $('#end-meeting').on('click', function() {
    $.ajax({
      url: '/meetings/' + meeting_id,
      type: 'PUT',
      data: 'meeting[end_time]=' + new Date()
    });
    paused = true;
    document.removeEventListener("mousemove", magicMouse);
    clearTimeout(timeout);

    $('#end-meeting').hide();
    $('#ended-meeting-message').show();
  });
});

// hide elements when inactive
var timeout;
var isHidden = false;

function magicMouse() {
  console.log('1');
  if (!paused && !finished) {
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
  }
};

function selectText(elem) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(elem);
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(elem);
    window.getSelection().addRange(range);
  }
}

$('#share-meeting').on('click', function() {
  $('#url').show();
  $('#url').click();
});