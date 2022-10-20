let pokemon;
function dragStart(event) {
        console.log("Drag start")
        console.log(event)
        pokemon = event.target;
}


function dragOver(event) {
        event.preventDefault()
        console.log("Drag Over")
        console.log(event)
}

function dropPalestra(event) {
        event.preventDefault()
        document.getElementById("palestra").appendChild(pokemon);
}

function dropCasa(event) {
        event.preventDefault()
        document.getElementById("casa").appendChild(pokemon);
}