// 指定した日付
document.write(Temporal.PlainDate.from('2026-01-10'), '<br>');

// 指定した日時
const date = Temporal.PlainDateTime.from('2026-01-01T01:01:01');
document.write(date, '<br>');

// 加算
const result1 = date.add({
    years: 1,     // 1年後
    months: 2,  // 2ヶ月後
    days: 3,      // 3日後
    hours: 4,    // 4時間後
    minutes: 5, // 5分後
    seconds: 6, // 6秒後
});
document.write(result1, '<br>');

// 減算
const resutl2 = result1.subtract({
    years: 1,     // 1年前
    months: 2,  // 2ヶ月前
    days: 3,      // 3日前
    hours: 4,     // 4時間前
    minutes: 5, // 5分前
    seconds: 6, // 6秒前
});
document.write(resutl2);
