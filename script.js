const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
});









//selecionar o elemento do paragrafro para tablet e celular
//tem 2 formas de mudar texto de elemento
// 1 - innerText
// 2 - innerHTML    
const novoParagrafo = document.getElementById('paragrafo-principal');
if (window.innerWidth <= 480) {
    novoParagrafo.innerText = "Climatização eficiente para seu conforto e segurança.";
} else {
    novoParagrafo.innerText = "Conforto, eficiência e bem-estar para o seu dia a dia";
}
//animacao abaixo é para aparecer o texto do novo paragrafo
//para mobile
//primeiro vou criar uma nova variavel
const p = document.getElementById('paragrafo-principal');
p.classList.add('aparecer')

//opacity → visível ou não
//transform → posição
//transition → animação suave
//classList.add() → ativa o efeito




//abaixo é para o slider manual
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;

}