const $form = $("form")
const $movie = $("#movie")

$form.on("submit", (event) => {

    // preventDefault to prevent the refresh when I submit
    event.preventDefault()

    // get the form data
    // grabbing form node from the jquery object/array thing
    const formData = new FormData($form[0])

    // store the movie title from form in it's own variable
    const title = formData.get("movieTitle")

    // making a request for the data on that movie
    $.ajax(`https://www.omdbapi.com/?apikey=bee3427&t=${title}`)
    .then((response) => {
        $movie.html(`
        <h1>${response.Title}</h1>
        <img src=${response.Poster} alt=${response.title}>
        <h2>${response.Year}</h2>
        `)
    })
})