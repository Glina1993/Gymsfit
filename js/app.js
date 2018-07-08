let sex = document.getElementsByClassName('gender');
let gender;
let weight = document.querySelector("#weight");

function set() {
    if(sex[0].checked) {
        console.log("male");
    }   else if (sex[1].checked) {
        return console.log("female");
    }

    let weightVal = weight.value;
    console.log(weightVal);
}