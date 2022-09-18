const scriptURL = "https://script.google.com/macros/s/AKfycbw41d17k6A_nDqrWPwoirbzQtJ91zOWFWQnkxMsn6mZjtDX6-SGhMJi6Pt3Q8iwr9vhqA/exec";
const form = document.forms["contactUs"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alertku = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di klik tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan alert
      alertku.classList.toggle("d-none");
      //reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
