document.write("<table border='1'>");
for (let i = 1;i <= 3;i++) {
    document.write("<tr>");
    for (let j = 1;j <= 3;j++) {
        document.write('<td>' + (i * j) + '</td>');
        // document.write(`<td>${i * j}</td>`); // こちらでもよい
    }
    document.write("</tr>");
}
document.write("</table>");
