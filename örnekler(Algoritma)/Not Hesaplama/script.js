function Hesapla() {
    
    var sinav1 = Number(document.getElementById("not1").value);
    var sinav2 = Number(document.getElementById("not2").value);
    var sinav3 = Number(document.getElementById("not3").value);
    
  

   
    if (sinav1 < 0 || sinav1 > 100 || sinav2 < 0 || sinav2 > 100 || sinav3 < 0 || sinav3 > 100) {
        document.getElementById("sonuc").innerHTML = "Notlar 0 ile 100 arasında olmalıdır!";
        return;
    }

    
    var ortalama = (sinav1 + sinav2 + sinav3) / 3;
    
    
    if (ortalama >= 50) {
        document.getElementById("sonuc").innerHTML = "Geçtiniz! İşte Notunuz: " + ortalama.toFixed(2);//ortalama.toFixed(2) ifadesi, ortalamanın yalnızca iki ondalıklı kısmını gösterir. 
    } else {
        
        var enDusukNot = 50 - ortalama; 

        
        document.getElementById("sonuc").innerHTML = 
            "Geçemediniz! İşte Notunuz: " + ortalama.toFixed(2) + 
            ". Geçebilmek için diğer sınavlardan almanız gereken not: " + enDusukNot.toFixed(2);
    }
}