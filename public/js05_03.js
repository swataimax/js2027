// 同じクラス属性のタグ情報を取得
const elements = document.querySelectorAll('.smp');

// 繰り返し処理で各タグにイベントリスナーを付与する
elements.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        alert('クリックされました=' + e.target);
    });
});

// e.target でイベントが起きた要素を取得している
