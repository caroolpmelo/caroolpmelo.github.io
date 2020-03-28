// toggle hide/show
function openCvMenu() {
  document.getElementById('cvDropdown').classList.toggle('show');
}

// close on click out
window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    [].forEach.call(
      document.getElementsByClassName('dropdown-content'),
      element => {
        if (element.classList.contains('show')) {
          element.classList.remove('show');
        }
      }
    );
  }
};
