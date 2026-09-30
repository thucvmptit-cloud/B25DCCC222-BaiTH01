// năm 
document.getElementById("year").textContent =
  new Date().getFullYear();

// menu mobile
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// menu
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// dark light
document.getElementById("themeButton")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

// find project
const search = document.getElementById("search");
const projects = document.querySelectorAll(".project");

search.addEventListener("input", function () {
  const keyword = search.value.trim().toLowerCase();
  let count = 0;

  projects.forEach(function (project) {
    const text = project.textContent.toLowerCase();
    const found = text.includes(keyword);

    project.hidden = !found;

    if (found) {
      count++;
    }
  });

  document.getElementById("searchResult").textContent =
    count === 0 ? "Không tìm thấy dự án." : "";
});

// form + điều kiện
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("result");

  emailInput.value = email;

  if (name.length < 2) {
    result.textContent = "Họ tên phải có ít nhất 2 ký tự.";
  } else if (email === "" || emailInput.validity.typeMismatch) {
    result.textContent = "Vui lòng nhập email đúng định dạng.";
  } else if (message.length < 10) {
    result.textContent = "Nội dung phải có ít nhất 10 ký tự.";
  } else {
    result.textContent =
      "Thông tin hợp lệ! Form demo chưa gửi email thực tế.";
  }
});