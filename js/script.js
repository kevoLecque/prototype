function mostraralerta() {
    alert('You are a great man');
}

function hacerclick() {
    var elemento = document.querySelector('#scriptjs p');
    elemento.addEventListener('click', mostraralerta, false);
}

window.addEventListener('load', hacerclick, false);