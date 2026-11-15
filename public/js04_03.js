function display() {
    const list = document.querySelectorAll('a') // aタグをすべて取得
    const elem1 = document.querySelector('#d1')
    let text = '';
    // aタグの要素数分、繰り返し処理を行う
    for (let i = 0;i < list.length;i++) {
        // 各aタグのhref属性の値を取得する
        text += list.item(i).href + '<br>';
    }
    // brタグを描画するため、innerHTMLを使用してdivタグに表示する
    elem1.innerHTML = text;
}
