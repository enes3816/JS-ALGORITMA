function notlariHesapla() {
    // Kullanıcıdan alınan notları al
    var sinav1 = Number(document.getElementById("not1").value);
    var sinav2 = Number(document.getElementById("not2").value);

    // Ortalama hesapla
    var ortalama = (sinav1 + sinav2) / 2;

    // Sonuçları yazdır
    if (ortalama >= 50) {
        document.getElementById("sonuc").innerHTML = "Geçtiniz. İşte Notunuz: " + ortalama;
    } else {
        document.getElementById("sonuc").innerHTML = "Geçemediniz! İşte Notunuz: " + ortalama;
    }
}
