let m1 = document.getElementById('minus1')
let p1 = document.getElementById('plus1')
let q1 = document.getElementById('qty1')
let t1 = document.getElementById('total1')

let qnt1 = 1;
let price1 = 99;
p1.addEventListener('click', function(){
    qnt1++
    q1.textContent = qnt1;

    t1.textContent = price1 * qnt1;
})

m1.addEventListener('click', function(){
    if (qnt1>1){
        qnt1--
        q1.textContent = qnt1;
        t1.textContent = price1 * qnt1;
    }
})


let m2 = document.getElementById('minus2')
let p2 = document.getElementById('plus2')
let q2 = document.getElementById('qty2')
let t2 = document.getElementById('total2')

let qnt2 = 1;
let price2 = 199;
p2.addEventListener('click', function(){
    qnt2++
    q2.textContent = qnt2;

    t2.textContent = price2 * qnt2;
})

m2.addEventListener('click', function(){
    if (qnt2>1){
        qnt2--
        q2.textContent = qnt2;
        t2.textContent = price2 * qnt2;
    }
})

let m3 = document.getElementById('minus3')
let p3 = document.getElementById('plus3')
let q3 = document.getElementById('qty3')
let t3 = document.getElementById('total3')

let qnt3 = 1;
let price3 = 199;
p3.addEventListener('click', function(){
    qnt3++
    q3.textContent = qnt3;

    t3.textContent = price3 * qnt3;
})

m3.addEventListener('click', function(){
    if (qnt3>1){
        qnt3--
        q3.textContent = qnt3;
        t3.textContent = price3 * qnt3;
    }
})


let m4 = document.getElementById('minus4')
let p4 = document.getElementById('plus4')
let q4 = document.getElementById('qty4')
let t4 = document.getElementById('total4')

let qnt4 = 1;
let price4 = 99;
p4.addEventListener('click', function(){
    qnt4++
    q4.textContent = qnt4;

    t4.textContent = price4 * qnt4;
})

m4.addEventListener('click', function(){
    if (qnt4>1){
        qnt4--
        q4.textContent = qnt4;
        t4.textContent = price4 * qnt4;
    }
})