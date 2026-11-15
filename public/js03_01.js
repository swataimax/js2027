// Grobalオブジェクト
document.write(eval('1 + 2'), '<br>');

// Objectオブジェクト
const obj = new Object(123);
document.write(obj.toString(),'：', typeof obj.toString(), '<br>');
document.write(obj.valueOf(),'：', typeof obj.valueOf(), '<br>');
