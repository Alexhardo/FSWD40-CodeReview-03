function calc() {
    text = "Depending on the above entered values, your Insurance will cost : ";
    var naame = document.getElementById("name").value;
    var aage = Number(document.getElementById("age").value);
    var horse = Number(document.getElementById("hp").value);
    var land = document.getElementById("country").value;

    //if (naame == "" || aage == null || horse == null) {
    //     alert("Please fill all required field");
    //  } 
    //  else {
    validate();

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

        }
    } else {
        alert("Please enter valid age between 18 and 70 years");
    }

    //  }





}


function validate() {

    var fields = ["name", "age", "hp"];
    //needs to validate teh check fields separately

    var i, j, l = fields.length;
    var fieldname, els, valid, form = document.forms["register"];
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (form[fieldname].value === "") {
            alert(fieldname + " can not be empty");
            return false;
        }
    }



    if (!valid) {
        alert(fieldname + " can not be empty");
        return false;
    }
}


var age = +form.age.value;
if (!age || age < 15 || age > 50) {
    alert("enter valid age");
    

}
/*
    var empt1 = document.getElementById("name").value;
    var empt2 = Number(document.getElementById("age").value);
    var empt3 = Number(document.getElementById("hp").value);

    if (empt1 === "" && empt2 === null && empt3 === null ) {
        alert("all Field are required");
    }
/*
    if (empt2 == null) {
        alert("age Field is required");

    }

    if (empt3 == null) {
        alert("HorsePower Field is required");
    }


*/

