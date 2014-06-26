$(function() {
  $('#main-form').on('submit', function(event) {
    event.preventDefault();

    $(this).hide();

    var counter = 0;
    var counter_display;
    var num_people = $('#num-people').val() || 0;
    var average_salary = $('#salary').val();
    var salary_per_second = average_salary / ( 2000 * 60 * 60 );

    $('#flipcountdown').flipcountdown({
      size:"lg",
      tick: function() {
        counter += (num_people * salary_per_second);
        counter_display = parseFloat(counter).toFixed(2);

        return counter_display;
      }
    });
  });

    $("#salary")
        .bind("slider:ready slider:changed", function (event, data) {
            $(this)
                .nextAll(".output:first")
                .html('Avg Salary: $'+data.value.toFixed(0).replace(/./g, function(c, i, a) {
                return i && c !== "." && !((a.length - i) % 3) ? ',' + c : c;
            }));
        });


});