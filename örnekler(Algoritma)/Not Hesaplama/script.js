let dersSayisi = 0;
let toplamNot = 0;
let hedefOrtalama = 50; 
let dersAdi = "";

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

    
    let notlar = [dersNotu1, dersNotu2, dersNotu3];
    
    notlar.forEach(function(dersNotu, index) {
        let yeniKart = document.createElement('div');
        yeniKart.classList.add('not-kutusu');
        yeniKart.innerHTML = `
            <h3>${dersAdi} - Not </h3>
            <p>Not: ${dersNotu}</p>
        `;
        document.getElementById('notOrtalamalar').appendChild(yeniKart);
    });

    let ortalamaKart = document.createElement('div');
    ortalamaKart.classList.add('not-kutusu');
    ortalamaKart.innerHTML = `
        <h3>${dersAdi} - Ortalaması</h3>
        <p>Ortalama: ${ortalama.toFixed(2)}</p>
        <p>Minimum Geçmesi Gereken Not: ${eksikNot}</p>`;
    document.getElementById('notOrtalamalar').appendChild(ortalamaKart);

    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu1').value = '';
    document.getElementById('dersNotu2').value = '';
    document.getElementById('dersNotu3').value = '';
}

function hesaplaEksikNot(ortalama) {
    return (ortalama < hedefOrtalama) ? (hedefOrtalama * 3 - toplamNot).toFixed(2) : 0;
}
