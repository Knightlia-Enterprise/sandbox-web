const
    dialog = document.getElementById("name-dialog") as HTMLDialogElement,
    nameBtn = document.getElementById("name-btn") as HTMLButtonElement,
    cancelBtn = document.getElementById("modal-cancel-btn") as HTMLButtonElement;

// Event handlers
nameBtn.onclick = () => dialog.showModal();
cancelBtn.onclick = () => dialog.close();

// Display modal on page load
dialog.showModal();
