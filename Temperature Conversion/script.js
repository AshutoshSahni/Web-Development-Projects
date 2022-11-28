function convert(type) {
    var x;
    if(type == "c") {
        x = document.getElementById("c").value * 9/5 + 32;
        document.getElementById("f").value = x;
    } 
    else {
        x = (document.getElementById("f").value - 32) * 5/9;
        document.getElementById("c").value = x;
    }
}