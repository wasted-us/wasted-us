$(function() {
  var counter = 0;
  var counter_display;
  var num_people = 10;
  var salary_per_second = 100000 / ( 2000 * 60 * 60 );

  $('#flipcountdown').flipcountdown({
    size:"lg",
    tick: function() {
      counter += (num_people * salary_per_second);
      counter_display = parseFloat(counter).toFixed(2);

      return counter_display;
    }
  });
});