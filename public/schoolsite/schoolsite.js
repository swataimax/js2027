/************************************/
/*          ヘッダー                */
/************************************/

/**
 * 「研修情報」のサブメニューの表示・非表示切り替え
 */
// ナビゲーションの「研修情報」の情報を取得
const dropdown = document.querySelector('.dropdown');

// サブメニュー(Java研修、Python研修)の情報を取得
const submenu = dropdown.querySelector('.submenu');

// 「研修情報」にマウスカーソルを乗せたときのイベント
dropdown.addEventListener('mouseenter', () => {
	// サブメニューを表示する
	submenu.style.display = 'block'; 
});
// 「研修情報」にマウスカーソルを離したときのイベント
dropdown.addEventListener('mouseleave', () => {
	// サブメニューを非表示にする
	submenu.style.display = 'none'; 
});




/************************************/
/*          topページ               */
/************************************/

/**
 * コース詳細展開
 */
// 「詳細を見る」クリック時のイベント
const detailElements = document.querySelectorAll('.detail-expansion');

// 「詳細を見る」クリック時のイベント
detailElements.forEach(elem => {
	elem.addEventListener('click', () => {
		// 現在選んでいる要素のすぐ後ろにある「兄弟要素」を取得する
		// →「<div class='detail'>」を取得する
		const detail = elem.nextElementSibling;
		// 「<div class='detail'>」のdisplayプロパティの値が「block」か判定
		// 「block」の場合はtrue、それ以外の場合はfalse 
		const isOpen = detail.style.display === 'block';
		
		// displayプロパティ値が「block」の場合
		if (isOpen) {
			detail.style.display = 'none'; // 非表示にする
			elem.textContent = '詳細を見る'; // 文言の切り替え
		} else { // displayプロパティ値が「block」以外の場合
			detail.style.display = 'block'; // 表示する
			elem.textContent = '詳細を閉じる'; // 文言の切り替え
		}
	});
});



/************************************/
/*          問い合わせ              */
/************************************/

/**
 * 問い合わせフォーム　個人・法人切り替え
 */
// ラジオボタンの選択が個人の場合
const individualRadio = document.querySelector('input[value="individual"]');
// 個人用の名前の入力欄
const individualFields = document.getElementById('individualFields');
// 個人用の入力欄を表示、法人用入力欄を非表示にする
individualRadio.addEventListener('change', () => {
	individualFields.style.display = 'block'; // 個人は表示
	companyFields.style.display = 'none'; // 法人は非表示
});

// ラジオボタンの選択が法人の場合
const companyRadio = document.querySelector('input[value="company"]');
// 法人用の会社名・担当者名の入力欄
const companyFields = document.getElementById('companyFields');
// 個人用の入力欄を非表示、法人用入力欄を表示にする
companyRadio.addEventListener('change', () => {
	individualFields.style.display = 'none'; // 個人は非表示
	companyFields.style.display = 'block'; // 法人は表示
});


/**
 * 送信ボタンの活性・非活性切り替え
 */
// 送信ボタン
const submitBtn = document.getElementById('submitBtn');
// 「個人情報保護方針に同意する」チェックボックス
const agree = document.getElementById('agree');
agree.addEventListener('change', () => {
	// 同意にチェックがされている場合
	if (agree.checked) {
		submitBtn.disabled = false // 活性化
	// チェックされていない場合
	} else {
		submitBtn.disabled = true; // 非活性化
	}
});


/**
 * 送信ボタンクリック
 */
// 送信
const submit = document.getElementById('contactForm');
// 送信イベントに対してイベントリスナーを設定
submit.addEventListener('submit', (e) => {
	e.preventDefault();
	alert('お問い合わせを送信しました。');
	location.href = 'top.html'; // top.htmlへ遷移
});
