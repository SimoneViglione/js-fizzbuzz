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






