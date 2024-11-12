// script.js

document.getElementById("ekleButton").addEventListener("click", function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    // Ders adı ve notunu al
    const dersAdi = document.getElementById("dersAdi").value.trim();
    const dersNotu = document.getElementById("dersNotu").value.trim();

    // Eğer ders adı ve notu girildiyse, ekleyelim
    if (dersAdi && dersNotu) {
        // Yeni bir ders ve not kutusu oluşturalım
        const notlarDiv = document.getElementById("notlar");

        // Yeni bir div kart oluştur
        const dersNotuDiv = document.createElement("div");
        dersNotuDiv.classList.add("kart");

        // İçeriği oluştur
        dersNotuDiv.innerHTML = `
            <h3>${dersAdi}</h3>
            <p>Not: ${dersNotu}</p>
        `;

        // Kartı "notlar" alanına ekleyelim
        notlarDiv.appendChild(dersNotuDiv);

        // Giriş alanlarını temizle
        document.getElementById("dersAdi").value = '';
        document.getElementById("dersNotu").value = '';

        // Ortalama hesaplama
        hesaplaOrtalama();
    } else {
        alert("Lütfen ders adı ve notunu girin.");
    }
});

// Ortalama hesaplama fonksiyonu
function hesaplaOrtalama() {
    const kartlar = document.querySelectorAll(".kart");
    let toplam = 0;
    let dersSayisi = 0;

    kartlar.forEach(kart => {
        const dersSonuc = kart.querySelector("p");
        if (dersSonuc && dersSonuc.textContent) {
            const not = parseFloat(dersSonuc.textContent.replace("Not: ", ""));
            if (!isNaN(not)) {
                toplam += not;
                dersSayisi++;
            }
        }
    });

    if (dersSayisi > 0) {
        const ortalama = toplam / dersSayisi;
        document.getElementById("ortalama").textContent = `Ortalama: ${ortalama.toFixed(2)}`;
    } else {
        document.getElementById("ortalama").textContent = "Henüz not eklenmedi.";
    }
}
