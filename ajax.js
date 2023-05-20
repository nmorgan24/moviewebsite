// // $.ajax('url') - A function built into jquery for making API calls
// const myProm = $.ajax("https://dummydata.netlify.app/")
// console.log(myProm)
// console.log(myProm.responseText)

// // .then function, what should happen, when the data arrives
// // .then((response) => {} )
// myProm.then((response) => {
//     console.log(response)
//     //replace my body with this html
//     document.body.innerHTML = response
// })


// make request for the mario data
$.ajax("https://dummydata.netlify.app/mariones.json")
.then((response) => {
    console.log(response)
    console.log(response.nes_games)
    const games = response.nes_games
    const div = $("#mario")
    for (game of games){
        const newDiv = $("<div>").addClass("game")
        newDiv.html(`
            <h1>${game.name}</h1>
            <img src=${game.img} alt=${game.name}>
        `)
        div.append(newDiv)
    }
})


// using axios to make an API request
axios("https://dummydata.netlify.app/marvel.json")
.then((response) => {
    console.log(response)
    console.log(response.data)
})


// using fetch with the pokemon data
fetch("https://dummydata.netlify.app/pokedex.json")
// first .then gets back a RESPONSE obeject
.then((response) => {
    console.log(response)
    return response.json()
})
// second .then receives data from  RESPONSE.json()
.then((response) => {
    console.log(response)
    const $pokeDiv = $("#pokemon")
    // get back an array with just what I need
    const pokemon = response.pokemon.map((p) => {
        return {name: p.name, img: p.img}
    })
    console.log(pokemon)
    // loop and build our dom
    for (let poke of pokemon){
        const div = $("<div>")
        div.html(`
        <h1>${poke.name}</h1>
        <img src=${poke.img} alt=${poke.name}>
        `)
        $pokeDiv.append(div)
    }

})


