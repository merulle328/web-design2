document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('pop');
  const closeBtn = document.querySelector('.close-btn');

  setTimeout(function() {
    popup.style.display = 'block';
  }, 5000);

  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });
    popup.addEventListener('click', function (event) {

        if (!event.target.closest('.pop-content')) {
            popup.style.display = 'none';
        }
  });
});

