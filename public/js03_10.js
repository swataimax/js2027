// 文字列のため、シングルクォーテーションで囲む
// ダブルクォーテーションはJSONデータで使用するので囲むのに使えない
const text = '{"id" :1, "name" :"yamada"}';

// JSONに変換
const value = JSON.parse(text);

// 画面に表示
document.write("parse：" + value + "<br>"); 

// デベロッパーツールのコンソールに表示
console.log('parse：'); 
console.log(value);

// JSON文字列に変換
const restore = JSON.stringify(value);

// 画面に表示
document.write("stringify：" + restore + "<br>");

// デベロッパーツールのコンソールに表示
console.log('stringify：');
console.log(restore);

