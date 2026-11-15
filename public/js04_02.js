function change() {
    const x = 'abcdefg';
    const elem1 = document.getElementById('p1');
    console.log(elem1.textContent); // 変更前のtextContentを表示
    elem1.textContent = '<h1>' + x + '</h1>'
    const elem2 = document.getElementById('p2');
    console.log(elem2.innerHTML); // 変更前のinnerHTMLを表示
    elem2.innerHTML = '<h1>' + x + '</h1>';
}
