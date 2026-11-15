// 引数colorには「red」「blue」「yellow」が渡ってくる
function setColor(color) {
    // 背景色を設定する divタグの情報を取得する
    const elem = document.getElementById("text");
    // background-colorプロパティ(背景色)に色を設定する
    elem.style.backgroundColor = color;
}


// ↓2026/11/15追加
//const b1 = document.getElementById('b1');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const txt = document.querySelector('#text2')
//const txt = document.getElementById('text2')
//console.log(b1);
//console.log(b2);
//console.log(b3);
//console.log(txt);
b1.addEventListener('click', (e) => {
    txt.style.backgroundColor = e.target.value;
});
b2.addEventListener('click', (e) => {
    txt.style.backgroundColor = e.target.value;
});
b3.addEventListener('click', (e) => {
    txt.style.backgroundColor = e.target.value;
});


const btns = document.querySelectorAll('.btn');
//console.log(btns);
btns.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        const txt3 = document.querySelector('#text3')
        txt3.style.backgroundColor = e.target.value;
    });
});


