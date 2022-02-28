// #region setup
const alertButton = document.querySelector('#alertButton');
const consoleButton = document.querySelector('#consoleButton');

alertButton.addEventListener('click', showAlert);
consoleButton.addEventListener('click', logMessage);
// #endregion

// #region functions
function showAlert() {
    alert('Alert message');
}

function logMessage() {
    console.log('console message');
}
// #endregion
