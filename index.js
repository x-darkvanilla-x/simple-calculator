function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}

function equal() {
  var exp = document.form1.textview.value;

  if (exp) {
    console.log("input : " + exp);
    console.log("output : " + eval(exp));
    document.form1.textview.value = eval(exp);
  }
}

function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
}

const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
