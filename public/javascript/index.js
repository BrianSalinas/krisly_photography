window.addEventListener("scroll",function(){
    let header = document.getElementById("header");
    let window_position = window.scrollY > 0;
    header.classList.toggle("scrolling-active", window_position);
});

function transparent_change(){
  let header = document.getElementById("header");
  header.classList.toggle("scrolling-active");
  console.log("Activado");
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();