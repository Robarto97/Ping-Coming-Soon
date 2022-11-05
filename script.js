const submitBtn = document.querySelector("#submit");
const inputEmail = document.querySelector("#email");
const errorMsg = document.querySelector("#error");

const emailRegex = /^\w+([\.-_]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/g;

submitBtn.addEventListener("click", handleClick);

function handleClick() {
  if (inputEmail.value.match(emailRegex)) {
    inputEmail.value = "";
    errorMsg.classList.remove("show");
    inputEmail.style.border = "1px solid var(--gray)";
  } else {
    inputEmail.style.border = "1px solid var(--light-red)";
    errorMsg.classList.add("show");
  }
}
