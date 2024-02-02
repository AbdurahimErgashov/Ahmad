document.querySelector(".btn").addEventListener("click", Triangle);

function Triangle(event) {
    const A = document.querySelector(".input1").value*1;
    const B = document.querySelector(".input2").value*1;
    const C = document.querySelector(".input3").value*1;
    event.preventDefault();

    if (/^[1-9][0-9]{0,4}$/.test(A) && /^[1-9][0-9]{0,4}$/.test(B) && /^[1-9][0-9]{0,4}$/.test(C)) {
        if ((A+B>C&&Math.abs(B-A)<C)||(A+C>B&&Math.abs(C-A)<B)||(B+C>A&&Math.abs(C-B)<A)) {
            let p = (A+B+C);
            let S = (A*B*C);
            document.querySelector(".p1").textContent = p + " sm";
            document.querySelector(".s1").textContent = S.toFixed(0) + " sm^2";
        } else{
            document.querySelector(".input1").value = '';
            document.querySelector(".input2").value = '';
            document.querySelector(".input3").value = '';
            alert("Bu uzunliklar uchburchak yasash qoidalariga to'g'ri kelmaydi!!!🤬")
        }
    } else {
        alert("Har bir maydon 1 xona dan 5 xona gacha faqat son bo'lishi kerak!");
    }
}

setInterval(() => {
    const A = document.querySelector(".input1").value*1;
    const B = document.querySelector(".input2").value*1;
    const C = document.querySelector(".input3").value*1;
    document.querySelector(".a_tomon").innerHTML = A
    document.querySelector(".b_tomon").innerHTML = B
    document.querySelector(".c_tomon").innerHTML = C
}, 1000);