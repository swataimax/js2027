const s1 = 'ABC' + 'EFG'; // 文字列同士の連結
document.write('s1：' + s1 + '<br>');

const s2 = '文字列=' + s1; // リテラルと変数の連結
document.write('s2：' + s2 + '<hr>');
let name = '山田';

const s3 = `こんにちは、${name}さん。
今日はよいお天気ですね。`;
document.write("<pre>" + s3 + "</pre>");
// document.write(`<pre>${s3}</pre>`); // こちらでもよい
