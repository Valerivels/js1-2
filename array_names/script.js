var namesArr = [];
for (var i = 0; i < 5; i++){
    namesArr.push(prompt('Имя для массива'));
}
alert(namesArr);

var rightName;
var userName = prompt('Введите Ваше имя');
for (i = 0; i < namesArr.length; i++){
    if (namesArr[i] === userName){
        rightName = true;
    }
}

if (rightName == true) {
    alert(userName + ', Вы успешно вошли');
} else {
    alert('Ошибка');
}