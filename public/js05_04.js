const b1 = document.querySelector('#b1');

// ボタンクリック時のイベントを監視
b1.addEventListener('click', () => {
    const f1 = document.querySelector('#f1');
    const f2 = document.querySelector('#f2');
    const f3 = document.querySelector('#f3');
    // parseIntメソッドで数値に変換
    f3.value = parseInt(f1.value) + parseInt(f2.value);
});
