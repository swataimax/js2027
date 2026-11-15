const list = new Array(30, 40, 20, 10, 50);
list.sort();
document.write(list, '<br>');

// 要素を昇順に並び替える
list.sort(function(x, y){
    return x - y; // 昇順
});
document.write(list, '<br>');

// 要素を降順に並び替える
list.sort(function(x, y){
    return y- x; // 降順
});
document.write(list, '<br>');

// 要素を2倍して表示する
list.forEach(function(x) {
    document.write(x * 2, ',');
});
document.write('<br>');

// 要素を2乗する
const y = list.map(function(x) {
    return x * x
});
document.write(y, '<br>');
// 30以上の値を抽出する
const z = list.filter(function(x) {
	return x >= 30;
}) ;
document.write(z);
