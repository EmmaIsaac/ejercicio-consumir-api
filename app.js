const $main = document.querySelector("main");

fetch("https://rickandmortyapi.com/api/character")
.then((respuesta) => {
    return respuesta.json();
})
.then((data) => {
    const personajes = data.results;
    console.log(personajes);

    personajes.forEach((personaje) => {
        $main.innerHTML += `
        <div class="card">
            <div class="card_img">
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
            <div>
                <h3>${personaje.name}</h3>
                <p>Gender: ${personaje.gender}</p>
                <p>Specie: ${personaje.species}</p>
                <p>Status: ${personaje.status}</p>
            </div>
        </div>
        `;
    });

});