const remote = require('electron').remote;

document.getElementById("minimize").addEventListener("click", function ()
{
    const window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("close").addEventListener("click", function ()
{
    const window = remote.getCurrentWindow();
    window.close();
});