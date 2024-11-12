var not1 = prompt(" 1. Notunuzu giriniz:");
var not2 = prompt(" 2. Notunuzu giriniz:");

var ortalama = (not1) + (not2) / 2;


if (ortalama >= 50) {
    alert("Geçtiniz."+ " İşte Notunuz : "+ ortalama);
} else {
    alert("Geçemediniz!"+" İşte Notunuz : "+ ortalama);
}