function hesapla() {
    var dersAdi = document.getElementById('dersAdi').value;
    var dersNotu = document.getElementById('dersNotu').value;
    

    
    var yeniKart = document.createElement('div');
    yeniKart.classList.add('not-kutusu');
    
    
    yeniKart.innerHTML = "Ders: " + dersAdi + "  Not: " + dersNotu;


   
   document.getElementById('notOrtalamalar').innerHTML += "<div class='not-kutusu'>Ders: " + dersAdi + "  Not: " + dersNotu + "</div>";

    
    document.getElementById('dersAdi').value = '';
    document.getElementById('dersNotu').value = '';
}
