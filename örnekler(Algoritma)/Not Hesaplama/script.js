var not1 = prompt(" 1. Notunuzu giriniz:");
var not2 = prompt(" 2. Notunuzu giriniz:");

var ortalama = (vize1 * 0.4) + (vize2 * 0.6);


if (ortalama >= 50) {
    alert("Geçtiniz."+ " İşte Notunuz : "+ ortalama);
} else {
    alert("Geçemediniz!"+" İşte Notunuz : "+ ortalama);
}