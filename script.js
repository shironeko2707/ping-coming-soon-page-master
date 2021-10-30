const input = document.querySelector("input");
const button = document.querySelector("button");
const small = document.querySelector("small")

button.addEventListener("click", function() {
    let value = input.value;
    if(validate() === true && value != "") {
        alert("Email Submitted!");
        small.innerHTML = null;
        small.classList.remove("small");
        input.classList.remove("error");
    }
    if (validate() === false) {
        small.innerHTML = "Please provide a valid email";
        small.classList.add("small");
        input.classList.add("error");
      }
    if (value === "") {
        small.innerHTML = "Whoops! It looks like you forgot to add your email";
        small.classList.add("small");
        input.classList.add("error");
      }    
});
function validate() {
    let value = input.value;
    const format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (value.match(format)) return true;
    else return false;
  }