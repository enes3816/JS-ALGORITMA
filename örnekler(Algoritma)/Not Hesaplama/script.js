// Global değişkenler
let toplamNot = 0;
let dersSayisi = 0;

function hesapla() {
    // Ders adı ve notu alınıyor
    var dersAdi = document.getElementById('dersAdi').value;
    var dersNotu = parseFloat(document.getElementById('dersNotu').value);

    // Geçerli not sayısı 0'dan küçükse işlemi sonlandır
    if (isNaN(dersNotu) || dersNotu < 0 || dersNotu > 100) {
        alert("Lütfen geçerli bir not girin (0-100 arası).");
        return;
    }

    // Notu ve ders adını ekliyoruz
    dersSayisi++;
    toplamNot += dersNotu;

    // Yeni kart ekleniyor
    var yeniKart = document.createElement('div');
    yeniKart.classList.add('not-kutusu');
    yeniKart.innerHTML = "Ders: " + dersAdi + "  Not: " + dersNotu;

    // Kartları "notOrtalamalar" bölümüne ekliyoruz
    document.getElementById('notOrtalamalar').appendChild(yeniKart);

    // Ortalama hesapla
    var ortalama = toplamNot / dersSayisi;

    // Ortalama sonucu <p> etiketi içinde gösteriyoruz
    var ortalamaSonuc = document.getElementById('ortalamaSonuc');
    ortalamaSonuc.innerHTML = "Ortalama: " + ortalama.toFixed(2);

    // Formu temizliyoruz
    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu').value = '';
}
