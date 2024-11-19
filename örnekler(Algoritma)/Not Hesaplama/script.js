let dersAdi = "";
let toplamNot = 0;
let hedefOrtalama = 50; 

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

    toplamNot = dersNotu1 + dersNotu2 + dersNotu3;
    let ortalama = toplamNot / 3;

    let eksikNot = hesaplaEksikNot(ortalama);

    // Not kutusunu oluştur
    let notKutusu = document.createElement('div');
    notKutusu.classList.add('not-kutusu');
    notKutusu.innerHTML = `
        <h3>${dersAdi} - Notlar</h3>
        <p>1. Not: ${dersNotu1}</p>
        <p>2. Not: ${dersNotu2}</p>
        <p>3. Not: ${dersNotu3}</p>
        <p><strong>Ortalama: ${ortalama.toFixed(2)}</strong></p>
        <p><strong>Minimum Geçmesi Gereken Not: ${eksikNot}</strong></p>
    `;
    document.getElementById('notOrtalamalar').innerHTML = ''; 
    document.getElementById('notOrtalamalar').appendChild(notKutusu);

    // Genel ortalamayı hesapla ve ekle
    let genelOrtalama = (ortalama).toFixed(2);
    let genelOrtalamaDiv = document.createElement('div');
    genelOrtalamaDiv.innerHTML = `
        <p><strong>Genel Ortalama: ${genelOrtalama}</strong></p>
    `;
    document.getElementById('genelOrtalama').appendChild(genelOrtalamaDiv);

    
    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu1').value = '';
    document.getElementById('dersNotu2').value = '';
    document.getElementById('dersNotu3').value = '';
}

function hesaplaEksikNot(ortalama) {
    return (ortalama < hedefOrtalama) ? (hedefOrtalama * 3 - toplamNot).toFixed(2) : 0;
}
