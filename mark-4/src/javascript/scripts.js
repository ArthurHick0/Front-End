const btn = document.getElementById("open_btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
    overlay.classList.toggle("active");
    document.body.classList.toggle("sidebar-open");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar");
    overlay.classList.remove("active");
    document.body.classList.remove("sidebar-open");
});