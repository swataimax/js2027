// 現在日付
document.write(Temporal.Now.plainDateISO(), '<br>');

// 現在日時
const now = Temporal.Now.plainDateTimeISO();
document.write(now, '<br>');
document.write('年：' + now.year, '<br>');
document.write('月：' + now.month, '<br>');
document.write('日：' + now.day, '<br>');
document.write('時：' + now.hour, '<br>');
document.write('分：' + now.minute, '<br>');
document.write('秒：' + now.second);
