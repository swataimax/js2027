document.write(Temporal.Now.plainDateISO(), '<br>');
//const now = Temporal.Now.plainDateTimeISO();
//document.write(now, '<br>');
//document.write(now.year, '<br>');
//document.write(now.month, '<br>');
//document.write(now.day, '<br>');
//document.write(now.hour, '<br>');
//document.write(now.minute, '<br>');
//document.write(now.second, '<br>');

//document.write(Temporal.PlainDate.from('2026-01-10'), '<br>');
//const date = Temporal.PlainDateTime.from('2026-01-10T01:02:03.1234');
//document.write(date, '<br>');


//
//const now = Temporal.Now.plainDateTimeISO();
//const year = now.year;
//const month = now.month;
//const day = now.day;
//const hour = now.hour;
//const minute = now.minute;
//const second = now.second;
//document.write(year,month,day,hour,minute,second);


const date = Temporal.PlainDateTime.from('2026-01-01T01:01:01');
document.write(date, '<br>');
const result1 = date.add({
  years: 1,  // 1年後
  months: 2, // 2ヶ月後
  days: 3, // 3日後
  hours: 4, // 4時間後
  minutes: 5, // 5分後
  seconds: 6, // 6秒後
});
document.write(result1, '<br>');
const resutl2 = result1.subtract({
	years: 1, // 1年前
	months: 2, // 2ヶ月前
	days: 3, // 3日前
	hours: 4, // 4時間前
	minutes: 5, // 5分前
	seconds: 6, // 6秒前
});
document.write(resutl2);
