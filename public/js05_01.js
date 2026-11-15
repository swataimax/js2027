// buttonタグの情報を取得する
const b1 = document.getElementById('b1');

// ボタンをクリックしたら、alert関数を呼び出す
b1.addEventListener('click', () => {
    alert('ボタンをクリックしました');
});

// アロー関数を使わない記述
b2.addEventListener('click', function() {
    alert('ボタンをクリックしました');
});
