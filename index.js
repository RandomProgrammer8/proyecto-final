let Array = [
{
    image:src="ben2.png",
    title: "einstein",
    description: "producto bonito"
}, 
{
    image: "ben3.png",
    title: "Beethoven",
    description:"gatito irresistible",
},
{
    image: "ben1.png",
    title: "Batch",
    description:"gatito irresistible",
}
]

Array.forEach(element => {
    let container = document.querySelector (".container") 
    //imagen
    let image = document.createElement("img")
    image.setAttribute("style", 'width:20em')
    image.src = element.image
    //titulo h1
    let title = document.createElement("h1")
    //texto
    let text = document.createElement("p")
    //descripciones
    let description = document.createElement ("p") 
    //asignar valores a tags creados
    image.textContent = element.image
    title.textContent = element.title
    description.textContent = element.description 
    //ingresar valores al DIV de HTML
    container.appendChild(image)
    container.appendChild(title)
    container.appendChild(description)
});