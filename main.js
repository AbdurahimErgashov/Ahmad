const A = document.querySelector(".input1").value;
const B = document.querySelector(".input2").value;
const C = document.querySelector(".input3").value;

// function Triangle(e) {
    if(/^[0-9]{0-5}$/.test(A)&&/^[0-9]{0-5}$/.test(B)&&/^[0-9]{0-5}$/.test(C)){
        alert("ishladi!")
    }
    // console.log(e.target);
// }
console.log(A,B,C)