var paused = false;
var finished = $('#counter-page').data('finished') || false;

$(function() {

  $('#url').hide();
  $('#new-meeting').hide();


  var counter = $('#counter-page').data('cost') || 0;
  var counter_display;
  var num_people = $('#counter-page').data('participant-count') || 0;
  var num_checkedout_people = $('#counter-page').data('checked-out-participant-count') || 0;
  var average_salary = $('#counter-page').data('salary') || 90000;
  var salary_per_second = average_salary / ( 2000 * 60 * 60 );
  var meeting_id = $('#counter-page').data('id');

  $('#flipcountdown').flipcountdown({
    size:"lg",
    tick: function() {
      if (!paused && !finished) {
        counter += ( ( num_people - num_checkedout_people ) * salary_per_second);
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
    $('.hide-on-finish').hide();
    $('#end-meeting').hide();
    $('#ended-meeting-message').show();
    $('.show-on-finish').show();
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

  if ( $('#participants').height() > 250 )
    $('#participants').css('font-size', '13px');

  $('#checkout-meeting').on('click', function() {
    num_checkedout_people++;
    $('span.checked-in:last').removeClass('checked-in').addClass('checked-out');
    $.ajax({
      url: '/meetings/' + meeting_id,
      type: 'PUT',
      data: 'meeting[checked_out_participant_count]=' + num_checkedout_people
    });
    if (num_people == num_checkedout_people) {
      $('#end-meeting').click();
      $('.hide-on-finish').hide();
      $('.show-on-finish').show();
    }
  });
});

// hide elements when inactive
var timeout;
var isHidden = false;

magicMouse();

function magicMouse() {
  if (!paused && !finished) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      // hide stuff
      if (!isHidden) {
        $('.hideable').stop().fadeOut(500);
        isHidden = true;
      }
    }, 2000);
    // unhide stuff
    if (isHidden) {
      $('.hideable').stop().fadeIn(500);
      isHidden = false;
    }
  }
  if (finished) {
    $('.hide-on-finish').stop().fadeOut(500);
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