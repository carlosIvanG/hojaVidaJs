
const info = document.querySelector("#info");
function Connection() {
    fetch('https://demo1871137.mockable.io/hojaDeVida')
        .then(response => response.json())
        .then(data => {
            const lista = `<ul>
            <li class='img'>${data.person.email}</li>
            <li class='github'>${data.person.github}</li>
            <li class='proyectos'><a href="${data.person.Proyecto}">Proyectos</a></li>
            </ul>`;
            info.innerHTML = lista;
            
        })
}
Connection();