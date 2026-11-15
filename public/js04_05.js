const d1 = document.getElementById('d1');
d1.addEventListener('click', () => {
    scrollTo({
        top: 0, // 現在位置がどの位置でもトップにスクロール
        behavior: 'smooth'
    });
});

const d2 = document.getElementById('d2');
d2.addEventListener('click', () => {
    console.log(innerHeight); // innerHeightの値確認
    scrollBy(0, innerHeight); // 現在位置から1ページ分下にスクロール
});
