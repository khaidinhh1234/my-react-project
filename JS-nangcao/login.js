const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const login = document.querySelector("#form-login");
const url = "http://localhost:3000/users";
login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (user.value == "") {
    alert("Cần Nhập tài khoản ");
    user.focus();
    return false;
  } else if (pass.value == "") {
    alert("Cần Nhập mật khẩu ");
    pass.focus();
    return false;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (checklogin(data, user.value, pass.value)) {
        console.log(data);
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "index.html";
      } else if (checklogin2(data, user.value, pass.value)) {
        console.log(data);
        alert("Tài khoản ko tồn tại");
      } else {
        alert(" mật khẩu của bạn nhập sai");
        console.log(user.value);
      }
    })
    .catch((err) => console.log(err));
  const checklogin = (data, user, pass) =>
    data.some((dt) => dt.username == user && dt.password == pass);
  const checklogin2 = (data, user, pass) =>
    data.some(
      (dt) =>
        (dt.username !== user && dt.password !== pass) || dt.password == pass
    );
});
