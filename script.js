// ---------- DARK MODE TOGGLE ----------
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.backgroundColor = "#1a73e8";
toggleBtn.style.color = "white";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styles dynamically
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #121212;
    color: #e0e0e0;
  }
  .dark-mode header {
    background-color: #0d47a1;
  }
  .dark-mode .card {
    background-color: #1e1e1e;
    color: #e0e0e0;
  }
  .dark-mode .btn-primary {
    background-color: #0d47a1;
  }
  .dark-mode .btn-outline {
    color: #0d47a1;
    border-color: #0d47a1;
  }
  .dark-mode footer {
    background-color: #000;
  }
`;
document.head.appendChild(style);

// ---------- MOBILE MENU PLACEHOLDER ----------
// You can expand nav links for mobile menu toggle here if needed
