const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
            pokeImage("./pokemon-sad.gif");
            nombre("No encontrado");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let name = data.name;
            let stats = data.stats;
            /**Tipo de pokemon**/
            for (let i = 0; i < data.types.length; i++) {
                const n = data.types[i];
                var tipo = n.type.name;
                console.log("Tipo: " + n.type.name);
            }


            nombre(name);
            pokeImage(pokeImg);
            tipoPokemon(tipo);
            hp(stats);
            console.log(name);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const nombre = (name) => {
    document.getElementById("nombre").innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
}

const tipoPokemon = (tipo) => {
    document.getElementById("tipoPokemon").innerHTML = tipo;
}

const hp = (stats) => {
    document.getElementById("hp").innerHTML = stats[0].base_stat;
    document.getElementById("attack").innerHTML = stats[1].base_stat;
    document.getElementById("Defence").innerHTML = stats[2].base_stat;
    document.getElementById("specialAttack").innerHTML = stats[3].base_stat;
    document.getElementById("specialDeffence").innerHTML = stats[4].base_stat;
    document.getElementById("Speed").innerHTML = stats[5].base_stat;

}

