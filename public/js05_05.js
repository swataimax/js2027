function getValue() {
    // inputタグのname属性がfruitのうち、選択されたボタンの情報を取得する
    const elem =
        document.querySelector('input[name="color"]:checked');

    if (elem) { // 選択されている場合
        const value = elem.value;
        alert(value); // 「red」または「blue」
    } else { // どちらも選択されていない場合はfalse
        alert('選択されていません');
    }
}
