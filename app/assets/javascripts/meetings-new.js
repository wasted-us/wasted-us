$(function() {
    $("#meeting_salary")
        .bind("slider:ready slider:changed", function (event, data) {
            $(this)
                .nextAll(".output:first")
                .html('Average Salary: $' + data.value.toFixed(0).replace(/./g, function (c, i, a) {
                    return i && c !== "." && !((a.length - i) % 3) ? ',' + c : c;
                }));
        });

    $('#end-meeting').on('click', function () {
        paused = true;
    });
});