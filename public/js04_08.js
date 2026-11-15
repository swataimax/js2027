setInterval("clock()", 1000); // 1秒ごとにclock関数を呼び出す

// 現在時刻を表示
function clock() {
    const elem = document.getElementById('d1');
    elem.textContent = Temporal.Now.plainDateTimeISO();
}
