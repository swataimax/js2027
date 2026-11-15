// 新しい要素(liタグ)を作成
const newElem = document.createElement('li');
newElem.textContent = 'さしすせそ';
// IDを使って親要素を取得
const parentsElem1 = document.querySelector('#smp1');
// 新しい要素を親要素に追加
parentsElem1.appendChild(newElem);

// IDを使って親要素を取得
const parentsElem2 = document.querySelector('#smp2');
// IDを使って子要素を取得
const removeElem = document.querySelector('#alphabet');
// 親要素から削除
parentsElem2.removeChild(removeElem);
