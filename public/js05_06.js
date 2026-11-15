// selectタグの情報を取得
const s1 = document.querySelector('#s1');

// 選択された項目が変更された場合のイベント
s1.addEventListener('change', (e) => {
    // 選択された項目の値を取得
    const selectedValue = e.target.value;
    // divタグに設定
    document.querySelector('#d1').textContent = selectedValue;
});

// e.target でイベントが起きた要素を取得している
// e.target.value は e.value ではダメ
