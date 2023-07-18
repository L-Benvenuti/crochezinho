const passwordCheck = function() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener("onclick", () => {
        const passInput = document.getElementById ("password");
        passInput.value === "relaxaMama" ? alert('Hoje vai ter uma festa, bolo e guaraná, muito doce pra você!!') : alert('Tenta de novo, parece que não sabes a senha hein?!')
    })
}