function hello() {
    document.write('こんにちは');
}
hello(); // hello関数の呼び出し
document.write('<br>');

function add(a, b) { // 引数のaには1、bには2が渡ってくる
    const c = a + b
    document.write(c);
}
add(1, 2); // add関数の呼び出し
document.write('<br>');

function hello2() {
    return 'Hello'; // 戻り値 「Hello」を返却する
}
const str = hello2(); // 戻り値 「Hello」を変数strに格納する
document.write(str + '<br>');

function triangle(base, height) {
    if (base <= 0 || height <= 0) {
        return; // baseまたはheightが0以下の場合、処理終了
    } else {
        return base * height / 2;
    }
}
// 引数に0を設定すると、undefinedになる
document.write(triangle(2, 3));

