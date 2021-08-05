let km = Number(prompt ('Введите число в км'));
let ft = Number(prompt ('Введите число в футах'));
let pss = '\n\nРабота программы завершена';


if (!Number.isNaN(km) && !Number.isNaN(ft)) {
    var kmMert = (km * 1000);
    var ftMert = (ft * 0.305);
    console.log ('перевод из км в м --->', kmMert);
    console.log ('перевод из фут в м --->', ftMert);
    if (kmMert < ftMert) {
        alert ('Число в км (' + km + ') меньше числа в футах ('+ ft + ')' + pss);
    }

    if (ftMert < kmMert) {
        alert('Первое в футах (' + ft + ') меньше числа в км (' + km + ')' + pss);
    }
}
else {
    alert ('Введено не числовое значение');
}