const elForm = document.querySelector('form');
let elSelect = document.querySelector('#qalinligi');
let elNon = document.querySelector('.main-right__non-p');
let kattaliklar = document.querySelectorAll('.allkattalar');

// non razmeri 
elSelect.addEventListener('change', (e) => {
    elNon.textContent = e.target.value
})


// pizza size
let kattaligi = document.getElementById('kattaligi');

kattaliklar.forEach(elem => {
    elem.addEventListener('change', (e) => {
        kattaligi.textContent = e.target.dataset.value
    })
})

//pizza info

let zabzavotlar = document.querySelectorAll('.zabzavotlar');
let box = document.getElementById('ustida');
let data = [];

const ustigaFunc = () => {
    box.innerHTML = '';
    data.forEach(elem => {
        let p = document.createElement('p');
        p.textContent = elem
        box.appendChild(p)
    })
}

zabzavotlar.forEach(element => {
    element.addEventListener('change', (e) => {
        if (e.target.checked) {
            data.push(e.target.dataset.value);
            ustigaFunc()
        } else {
            let index = data.findIndex(el => el === e.target.dataset.value)
            data.splice(index, 1)
            ustigaFunc()
        }
    })
})


// qo'shimcha
let qoshimcha = document.querySelectorAll('.qoshimchalar');
let qoshdi = document.querySelector('.qoshimcha');
let data1 = [];

const ustigaFunc1 = () => {
    qoshdi.innerHTML = '';
    data1.forEach(elem1 => {
        let p = document.createElement('p');
        p.textContent = elem1
        qoshdi.appendChild(p)
    })
    
}   

qoshimcha.forEach(element => {
    element.addEventListener('change', (e) => {
        if (e.target.checked) {
            data1.push(e.target.dataset.value);
            ustigaFunc1()
        } else {
            let index = data1.findIndex(el => el === e.target.dataset.value)
            data1.splice(index, 1)
            ustigaFunc1()
        }
    })
   
})