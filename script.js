const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    // what this does is: If the class 'hidden' is already present, it removes the class.
    // If class 'hidden' is not present, then it adds the class 'hidden'.
    // basically toggles between hidden and block classes
    
    navDialog.classList.toggle('hidden');
}