const z = {id:1, name:'山田'};
document.write(z.id + "<br>");
document.write(z.name + "<br>");
z.name = '佐藤'; // 「山田」を「佐藤」に変更
document.write(z['name']);
