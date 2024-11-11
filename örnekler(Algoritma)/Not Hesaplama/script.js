document.querySelector('button').addEventListener('click', function() {
    let not1 = document.getElementById('not1').value;
    let not2 = document.getElementById('not2').value;

    if (not1 && not2) {
        alert('Notlarınız Gönderildi!\n1. Not: ' + not1 + '\n2. Not: ' + not2);
    } else {
        alert('Lütfen her iki notu da girin.');
    }
});
