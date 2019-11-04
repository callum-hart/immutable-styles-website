window.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#example-ui-states-form");
  var primaryButton = form.querySelector(".primary-btn");
  primaryButton.addEventListener("click", function(e) {
    form.classList.add("form--disabled");
  });
});
