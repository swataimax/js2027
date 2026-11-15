const x = 10;  // ここの数値を変更して実行してみよう
if (x % 2 === 0) {
    document.write('<p>Hello</p>');
} else {
    document.write('<p>Thank you</p>');
}

const y = 20; // ここの数値を変更して実行してみよう
const z = x >= y ? '山田' : '田中';
document.write(`<p>${z}さん、こんにちは</p>`);

const a = 1; // ここの数値を変更して実行してみよう
switch (true) {
case a < 10:
    document.write('<p>あいうえお</p>');
    break;
case a < 100:
    document.write('<p>かきくけこ</p>');
    break;
default:
    document.write('<p>さしすせそ</p>');
}
