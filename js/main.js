for (let i = 1; i <= 100; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Pasta e Fagioli");
    }
    else if (i % 5 === 0) {
        console.log("Fagioli");
    }
    else if (i % 3 === 0) {
        console.log("Pasta");
    }
    else {
        console.log(i);
    }
}


//Bonus

const containerDom = document.querySelector('.container')

for (let i = 1; i <= 100; i++ ) {
    const box = document.createElement('div')
    box.classList.add('square');
    containerDom.append(box);

    if (i % 3 === 0 && i % 5 === 0) {
        box.classList.add('pasta-e-fagioli');
        box.append('Pasta e Fagioli');
    }
    else if (i % 5 === 0) {
        box.classList.add('fagioli');
        box.append('Fagioli');
    }
    else if (i % 3 === 0) {
        box.classList.add('pasta');
        box.append('Pasta');
    }
    else {
        box.classList.add('cifra');
        box.append(i);
    }
}





