const donneeLocal = localStorage.getItem('data')
let localData;
if (donneeLocal) localData = JSON.parse(donneeLocal)
else localData = localStorage.setItem('data', JSON.stringify([]))

console.log(localData)

const search = document.querySelector('.search')
search.addEventListener('input', (e) => {
    console.log("Data", e.target.value)
})

const popUp = document.querySelector('.popUp')
const btnAdd = document.querySelector('.add')
btnAdd.addEventListener('click', () => {
    console.log(popUp.classList.toggle('popUpActive')
    )
})


window.addEventListener('click', (e) => {
    if (e.target == popUp) {
        popUp.classList.remove('popUpActive')
    }
})
const form = document.querySelector('.form')


const items = document.querySelector('.items')
const btnajout = document.querySelector('.btnajout')
const textareaval = document.getElementById('textarea')
btnajout.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('data'))
    const taille = !data.length ? 0 : data.length
    console.log(data, 31, data.push({ id: taille, objet: textareaval.value }),)
    localStorage.setItem('data', JSON.stringify(data))
    items.innerHTML = ''
    textareaval.value = ''
    renderF()
    popUp.classList.remove('popUpActive')

})


function renderF() {
    const data = JSON.parse(localStorage.getItem('data'))
    const taille = !data.length ? 0 : data.length
    if (taille === 0) {
        items.innerHTML = `<h1>Aucune donnée disponible</h1>`
    }
    console.log(data.findIndex((ele, index) => ele.id == 0), 63)
    items.innerHTML = `
        ${data.map(ele => {
        return `
            <div class="item" id="itemCard">
                <div class="object">
                    ${ele.objet}
                </div>
                <div class="options">
                    <button class="delete" id="${ele.id}">Delete</button>
                    <button class="edit">Edite</button>
                    <button class="valide">Valide</button>
                </div>
            </div>
            `
    }).join('')}
    `
    const deletes = document.querySelectorAll('.delete')
    if (deletes)
        console.log(deletes, 88)

    deletes.forEach(ele => {
        console.log("hello")

        ele.addEventListener('click', (e) => {
            deleteF(parseInt(e.target.getAttribute("id")))
        })
    })
}




function deleteF(id) {
    const data = JSON.parse(localStorage.getItem('data'))
    const index = data.findIndex(ele => ele.id == 0)
    data.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(data))
    console.log(data)
    renderF()
}


renderF()

