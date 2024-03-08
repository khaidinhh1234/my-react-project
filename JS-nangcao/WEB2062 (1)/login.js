const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const formlogin = document.querySelector("#form-login");
const url = "http://localhost:3000/users";

formlogin.addEventListener("submit", (e) => {
  e.preventDefault();
  if (user.value == "") {
    alert("Vui lòng nhập tài khoản");
    user.focus();
    return false;
  } else if (pass.value == "") {
    alert("Vui lòng nhập mật khẩu");
    pass.focus();
    return false;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (check(data, user.value, pass.value)) {
        alert(" Đăng nhập thành công");
        window.location.href = "products.html";
      } else if (check2(data, user.value, pass.value)) {
        alert("tài khoản không tồn tại ");
      } else {
        alert("Mật khẩu của bạn không khớp ");
      }
    })

    .catch((error) => console.log(error));
  const check = (data, user, pass) =>
    data.some((pro) => pro.username == user && pro.password == pass);
  const check2 = (data, user, pass) =>
    data.some(
      (pro) =>
        (pro.username != user && pro.password != pass) || pro.password == pass
    );
});
