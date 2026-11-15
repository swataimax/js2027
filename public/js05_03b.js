const elements = document.querySelectorAll('.smp');

elements.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        console.log('e.type=' + e.type);
        console.log('e.target=' + e.target);
        console.log('e.timeStamp=' + e.timeStamp);
    });
});
