document.querySelector(".btn").addEventListener("click", Triangle);

function Triangle(event) {
    const A = document.querySelector(".input1").value*1;
    const B = document.querySelector(".input2").value*1;
    const C = document.querySelector(".input3").value*1;
    event.preventDefault();

    if (/^[1-9][0-9]{0,4}$/.test(A) && /^[1-9][0-9]{0,4}$/.test(B) && /^[1-9][0-9]{0,4}$/.test(C)) {
        let Arr = [A,B,C];
        Arr.sort((a, b) => a - b);
        let hNum = Arr[2];
        let nNum = Arr[1];
        let eNum = Arr[0];
        if ((eNum+nNum>hNum&&nNum-eNum<hNum)||(eNum+hNum>nNum&&hNum-eNum<nNum)||(nNum+hNum>eNum&&hNum-nNum<eNum)) {
            let p = (eNum+nNum+hNum)/2;
            let S = (Math.sqrt(p*(p-eNum)*(p-nNum)*(p-hNum)));
            document.querySelector(".peremetr").textContent = p + "sm";
            document.querySelector(".yuza").textContent = S.toFixed(1) + "sm^2";
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