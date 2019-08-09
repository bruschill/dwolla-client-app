$(document).ready(() => {
  $.ajax('http://localhost:3000/time/current', {
    success: (data) => {
      $('#currentTimeHeader').text(data.currentTime)
    }
  });
});
