let dersAdi = "";
let toplamNot = 0;
let hedefOrtalama = 50; 
let tumNotlar = []; // Tüm ders notlarını tutacak dizi

function hesapla() {
    dersAdi = document.getElementById('dersAdi').value;
    let dersNotu1 = Number(document.getElementById('dersNotu1').value);
    let dersNotu2 = Number(document.getElementById('dersNotu2').value);
    let dersNotu3 = Number(document.getElementById('dersNotu3').value);

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
    let eksikNot = hesaplaEksikNot(ortalama);
    let durum = hesaplaDurum(ortalama);
    
    // Eğer eksik sınav varsa, eksik sınav için gereken not hesapla
    let eksikNotDurum = "";
    if (durum === "Kaldı") {
        eksikNotDurum = `<p><strong>Eksik Not: ${eksikNot}</strong></p>`;
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

function hesaplaEksikNot(ortalama) {
    if (ortalama < hedefOrtalama) {
        return (hedefOrtalama * 3 - (ortalama * 3)).toFixed(2);
    }
    return 0;
}

function hesaplaDurum(ortalama) {
    if (ortalama >= hedefOrtalama) {
        return "Geçti";
    } else {
        return "Sorumlu";
    }
}

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
