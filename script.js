function openMenu() {
    document.getElementById("sidebar").style.width ="300px";
}

function closeMenu() {
    document.getElementById("sidebar").style.width ="0";
}
const sidebar = document.getElementById('sidebar');
const menuBtn = 
document.querySelector(".menu-btn");
// open sidebar
menuBtn.addEventListener('click', function
    (event) {
        event.stopPropagation();
        openMenu();
    });
    // Don't close when clicking inside the sidebar
sidebar.addEventListener('click', function(event) {
    event.stopPropagation();
});
  // close when clicking outside the sidebar
document.addEventListener('click', function() {
    closeMenu();
});
// =========================
// SERMONS POPUP
// =========================

function openSermons() {
    document.getElementById("sermonsPopup").style.display = "flex";
}

function closeSermons() {
    document.getElementById("sermonsPopup").style.display = "none";
}
function openSupportPopup() {
  document.getElementById("supportPopup").style.display = "flex";
}

function closeSupportPopup() {
  document.getElementById("supportPopup").style.display = "none";
}

// Close when clicking outside the popup
window.addEventListener("click", function(event) {
  const popup = document.getElementById("supportPopup");

  if (event.target === popup) {
    closeSupportPopup();
  }
});
function copyAccountNumber() {
  const accountNumber =
    document.getElementById("accountNumber").innerText;

  navigator.clipboard.writeText(accountNumber).then(() => {
    const button = document.querySelector(".copy-account");

    button.innerText = "Copied ✓";

    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  });
}

    // ==============================
// SCROLL TO TOP & BOTTOM
// ==============================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
}

