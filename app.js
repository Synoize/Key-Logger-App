const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = " ";
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function handleUp(e) {
    logDiv.textContent = `Key '${e.key}' pressed Up`
    stateDiv.textContent = "Key is Up"
}

function handleDown(e) {
    logDiv.textContent = `Key '${e.key}' pressed Down`
    stateDiv.textContent = "Key is Down"
}


//-->e --it's take a object as a argunment