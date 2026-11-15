const s = 'Hello World';
document.write('元の文字列：' + s + '<br>');
// 文字数
document.write('length：', s.length + '<br>');
// 大文字に変換
document.write('toUpperCase()：', s.toUpperCase() + '<br>');
// 「l」が最初に登場するインデックス
document.write('indexOf("l")：', s.indexOf('l') + '<br>');
// 「l」が最後に登場するインデックス
document.write('lastIndexOf("l")：', s.lastIndexOf('l') + '<br>');
// 「l」を「K」に1文字だけ置換
document.write('replace：', s.replace('l', 'K') + '<br>');
// 「l」を「K」にすべて置換
document.write('replaceAll：', s.replaceAll('l', 'K') + '<br>');
// 「Hello」で始まるか判定
document.write('startsWith：', s.startsWith('Hello') + '<br>');
// 「Hello」で終わるか判定
document.write('endsWith：', s.endsWith('Hello'));
