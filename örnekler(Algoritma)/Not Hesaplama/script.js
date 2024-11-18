// Global değişkenler
let toplamNot = 0;
let dersSayisi = 0;
let hedefOrtalama = 50; // Öğrencinin geçebilmesi için gereken minimum ortalama (bu değeri değiştirebilirsiniz)

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

    // Kartın içine içerik ekliyoruz: Ders Adı ve Not
    yeniKart.innerHTML = `
        <div class="kart-icerik">
            <p>Ders: ${dersAdi}</p>
            <p>Not: ${dersNotu}</p>
        </div>
    `;

    // Kartları "notOrtalamalar" bölümüne ekliyoruz
    document.getElementById('notOrtalamalar').appendChild(yeniKart);

    // Ortalama hesapla
    var ortalama = toplamNot / dersSayisi;

    // Ortalama sonucu <p> etiketi içinde gösteriyoruz
    var ortalamaSonuc = document.getElementById('ortalamaSonuc');
    ortalamaSonuc.innerHTML = "Ortalama: " + ortalama.toFixed(2);

    // Minimum alınması gereken notu hesapla
    var eksikNot = hesaplaEksikNot(ortalama, hedefOrtalama, dersSayisi);

    // Eğer eksik bir not varsa, kullanıcıya ne kadar daha alması gerektiği gösterilir
    if (eksikNot > 0) {
        ortalamaSonuc.innerHTML += "<br><span style='color: red;'>Eksik: Gelecek sınavlardan " + eksikNot.toFixed(2) + " daha almanız gerekiyor.</span>";
    } else {
        ortalamaSonuc.innerHTML += "<br><span style='color: green;'>Hedefinize ulaştınız!</span>";
    }

    // Formu temizliyoruz
    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu').value = '';
}

// Eksik not hesaplama fonksiyonu
function hesaplaEksikNot(mevcutOrtalama, hedefOrtalama, dersSayisi) {
    // Öğrencinin toplamda alması gereken not
    var toplamGerekliNot = hedefOrtalama * (dersSayisi + 1);
    
    // Şu ana kadar alınan toplam not
    var mevcutToplamNot = mevcutOrtalama * dersSayisi;

    // Gelecek sınavdan alınması gereken not
    var eksikNot = toplamGerekliNot - mevcutToplamNot;

    // Eğer eksik not negatifse, bu öğrencinin hedef ortalamaya zaten ulaştığını gösterir
    return eksikNot > 0 ? eksikNot : 0;
}
