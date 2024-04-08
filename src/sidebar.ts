const sidebar = document.getElementById("sidebar")!;

function toggleUserList() {
    sidebar.classList.toggle("collapsed");
}

document.getElementById("user-list-btn")!.onclick = toggleUserList;
document.getElementById("overlay")!.onclick = toggleUserList;

if (screen.width >= 768) {
    toggleUserList();
}
