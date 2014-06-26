$(function() {
  var i = 0;
  $('#flipcountdown').flipcountdown({
    size:"lg",
    tick: function() {
      return i++;
    }
  });
});