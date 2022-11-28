function startTime() {
    var date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(param) {
    if(param < 10) {
        param = "0" + param;
    }
    return param;
}