let dersAdi = "";
let hedefOrtalama = 50;
let tumNotlar = []; 
 
function openNav() {
    var sagWidth = document.getElementById("sag").offsetWidth;
    var sagHeight = document.getElementById("sag").offsetHeight;

    document.getElementById("YanMenu").style.width = sagWidth + "px";
    document.getElementById("YanMenu").style.height = sagHeight + "px";
}

function closeNav() {
    document.getElementById("YanMenu").style.width = "0";
    document.getElementById("YanMenu").style.height = "0";
}



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

    
    tumNotlar.push({dersAdi, dersNotu1, dersNotu2, dersNotu3});

    let notKutusu = document.createElement('div');
    notKutusu.classList.add('not-kutusu');
    
    let toplamDersNotu = dersNotu1 + dersNotu2 + dersNotu3;
    let ortalama = toplamDersNotu / 3;
    let eksikNot = hesaplaEksikNot(dersNotu1, dersNotu2, dersNotu3, ortalama);
    let durum = hesaplaDurum(dersNotu1, dersNotu2, dersNotu3, ortalama);
    
    let eksikNotDurum = "";
    if (eksikNot) {
        eksikNotDurum = `<p><strong>Eksik Sınav Notu: ${eksikNot}</strong></p>`;
    }

    if (durum === "Sorumlu") {
        notKutusu.style.backgroundColor = "Red"; 
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
    
    document.getElementById('notOrtalamalar').appendChild(notKutusu);

    hesaplaGenelOrtalama();

    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu1').value = '';
    document.getElementById('dersNotu2').value = '';
    document.getElementById('dersNotu3').value = '';
}

function hesaplaEksikNot(dersNotu1, dersNotu2, dersNotu3, ortalama) {
    let eksikNot = null;
    let gerekenToplam = hedefOrtalama * 3; 
    let mevcutToplam = dersNotu1 + dersNotu2 + dersNotu3;

    
    if (dersNotu1 === 0) {
        eksikNot = gerekenToplam - (dersNotu2 + dersNotu3);
    } else if (dersNotu2 === 0) {
        eksikNot = gerekenToplam - (dersNotu1 + dersNotu3);
    } else if (dersNotu3 === 0) {
        eksikNot = gerekenToplam - (dersNotu1 + dersNotu2);
    }

    if (eksikNot > 100) {
        return "Geçemezsiniz";
    }
    
    if (eksikNot !== null) {
        return eksikNot.toFixed(2);
    }

    return null;
}

function hesaplaDurum(dersNotu1, dersNotu2, dersNotu3, ortalama) {
    if (ortalama >= hedefOrtalama) {
        return "Geçti";
    } else {
        return "Sorumlu";
    }
}

function hesaplaGenelOrtalama() {
    let toplamOrtalama = 0;
    let dersSayisi = tumNotlar.length;
    
    tumNotlar.forEach(ders => {
        let dersToplamNotu = ders.dersNotu1 + ders.dersNotu2 + ders.dersNotu3;
        let dersOrtalama = dersToplamNotu / 3;
        toplamOrtalama += dersOrtalama;
    });

    let genelOrtalama = (toplamOrtalama / dersSayisi).toFixed(2);
    
    let genelOrtalamaDiv = document.createElement('div');
    genelOrtalamaDiv.innerHTML = ` 
        <p><strong>Genel Ortalama: ${genelOrtalama}</strong></p>
    `;

    document.getElementById('genelOrtalama').innerHTML = '';
    document.getElementById('genelOrtalama').appendChild(genelOrtalamaDiv);
}


