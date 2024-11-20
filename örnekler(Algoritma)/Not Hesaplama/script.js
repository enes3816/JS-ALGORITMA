let dersAdi = "";
let hedefOrtalama = 50; // Hedef ortalama 50
let tumNotlar = []; // Tüm ders notlarını tutacak dizi

// Hesaplama fonksiyonu
function hesapla() {
    dersAdi = document.getElementById('dersAdi').value;
    let dersNotu1 = Number(document.getElementById('dersNotu1').value);
    let dersNotu2 = Number(document.getElementById('dersNotu2').value);
    let dersNotu3 = Number(document.getElementById('dersNotu3').value);

    // Geçerli notlar olup olmadığını kontrol et
    if (isNaN(dersNotu1) || isNaN(dersNotu2) || isNaN(dersNotu3) || 
        dersNotu1 < 0 || dersNotu1 > 100 ||
        dersNotu2 < 0 || dersNotu2 > 100 ||
        dersNotu3 < 0 || dersNotu3 > 100) {
        alert("Lütfen geçerli notlar girin.");
        return;
    }

    // Yeni dersin notlarını array'e ekle
    tumNotlar.push({dersAdi, dersNotu1, dersNotu2, dersNotu3});

    // Her yeni ders için bir kart oluştur
    let notKutusu = document.createElement('div');
    notKutusu.classList.add('not-kutusu');
    
    let toplamDersNotu = dersNotu1 + dersNotu2 + dersNotu3;
    let ortalama = toplamDersNotu / 3;
    let eksikNot = hesaplaEksikNot(dersNotu1, dersNotu2, dersNotu3, ortalama);
    let durum = hesaplaDurum(dersNotu1, dersNotu2, dersNotu3, ortalama);
    
    // Eksik sınav varsa, eksik sınav için gereken not hesapla
    let eksikNotDurum = "";
    if (eksikNot) {
        eksikNotDurum = `<p><strong>Eksik Sınav Notu: ${eksikNot}</strong></p>`;
    }

    // Kartın rengi, durumuna göre değişsin
    if (durum === "Sorumlu") {
        notKutusu.style.backgroundColor = "#ff0000"; // Kırmızı renk
    }

    notKutusu.innerHTML = ` 
        <h3>${dersAdi} - Notlar</h3>
        <p>1. Sınav Notu: ${dersNotu1}</p>
        <p>2. Sınav Notu: ${dersNotu2}</p>
        <p>3. Sınav Notu: ${dersNotu3}</p>
        <p><strong>Ortalama: ${ortalama.toFixed(2)}</strong></p>
        <p><strong>Durum: ${durum}</strong></p>
        ${eksikNotDurum}
    `;
    
    // Yeni kartı sayfaya ekle
    document.getElementById('notOrtalamalar').appendChild(notKutusu);

    // Genel ortalamayı güncelle
    hesaplaGenelOrtalama();

    // Formu temizle
    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu1').value = '';
    document.getElementById('dersNotu2').value = '';
    document.getElementById('dersNotu3').value = '';
}

// Eksik not hesaplama fonksiyonu
function hesaplaEksikNot(dersNotu1, dersNotu2, dersNotu3, ortalama) {
    let eksikNot = null;
    let gerekenToplam = hedefOrtalama * 3; // Hedef ortalama ile 3 sınavın toplamı
    let mevcutToplam = dersNotu1 + dersNotu2 + dersNotu3;

    // Eğer herhangi bir sınav 0 ise, o sınavın alınması gereken notu hesapla
    if (dersNotu1 === 0) {
        eksikNot = gerekenToplam - (dersNotu2 + dersNotu3);
    } else if (dersNotu2 === 0) {
        eksikNot = gerekenToplam - (dersNotu1 + dersNotu3);
    } else if (dersNotu3 === 0) {
        eksikNot = gerekenToplam - (dersNotu1 + dersNotu2);
    }

    // Eğer eksik not hesaplandıysa ve 100'ü geçiyorsa, geçemez
    if (eksikNot > 100) {
        return "Geçemezsiniz";
    }

    // Eğer eksik not hesaplandıysa, gereken notu döndür
    if (eksikNot !== null) {
        return eksikNot.toFixed(2);
    }

    // Tüm sınavlar tamamlandıysa, eksik not yok
    return null;
}

// Durum hesaplama fonksiyonu
function hesaplaDurum(dersNotu1, dersNotu2, dersNotu3, ortalama) {
    if (ortalama >= hedefOrtalama) {
        return "Geçti";
    } else {
        return "Sorumlu";
    }
}

// Genel ortalama hesaplama fonksiyonu
function hesaplaGenelOrtalama() {
    let toplamOrtalama = 0;
    let dersSayisi = tumNotlar.length;
    
    // Tüm derslerin ortalamalarını topla
    tumNotlar.forEach(ders => {
        let dersToplamNotu = ders.dersNotu1 + ders.dersNotu2 + ders.dersNotu3;
        let dersOrtalama = dersToplamNotu / 3;
        toplamOrtalama += dersOrtalama;
    });

    // Genel ortalamayı hesapla 
    let genelOrtalama = (toplamOrtalama / dersSayisi).toFixed(2);
    
    // Genel ortalama div'ini güncelle
    let genelOrtalamaDiv = document.createElement('div');
    genelOrtalamaDiv.innerHTML = ` 
        <p><strong>Genel Ortalama: ${genelOrtalama}</strong></p>
    `;

    // Genel ortalamayı sayfada güncelle
    document.getElementById('genelOrtalama').innerHTML = '';
    document.getElementById('genelOrtalama').appendChild(genelOrtalamaDiv);
}
