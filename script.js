function calc() {
    text = "Depending on the above entered values, your Insurance will cost : ";
    var naame = document.getElementById("name").value;
    var aage = Number(document.getElementById("age").value);
    var horse = Number(document.getElementById("hp").value);
    var land = document.getElementById("country").value;

    if (aage >= 18 && aage <= 70) {

        if (land == "Austria") {
            result = (((horse * 100) / aage) + 50).toFixed(2);
            document.getElementById("price").innerHTML = text + "<b>" + result + " Euro </b>";

        } else if (land == "Germany") {
            result = (((horse * 120) / aage) + 100).toFixed(2);
            document.getElementById("price").innerHTML = text + "<b>" + result + " Euro </b>";
        } else if (land == "Italy") {
            result = (((horse * 150) / (aage + 2)) + 150).toFixed(2);
            document.getElementById("price").innerHTML = text + "<b>" + result + " Euro </b>";

        } else {
            alert("Please enter valid age between 18 and 70 years");
        }




    }
}