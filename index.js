const donneeLocal = localStorage.getItem('data')
let localData;
if (donneeLocal) localData = JSON.parse(donneeLocal)
else localData = localStorage.setItem('data', JSON.stringify([]))

console.log(localData)

const search = document.querySelector('.search')
search.addEventListener('input', (e) => {
    const data = JSON.parse(localStorage.getItem('data'))
    renderF(data.filter(ele => ele.objet.toLowerCase().includes(e.target.value.toLowerCase())))

    console.log("Data", data.filter(ele => ele.objet.toLowerCase().includes(e.target.value.toLowerCase())), 12)

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
    console.log(data, 31, data.push({ id: taille, objet: textareaval.value, }),)
    localStorage.setItem('data', JSON.stringify(data))
    items.innerHTML = ''
    textareaval.value = ''
    renderF(dataPrev = [])
    popUp.classList.remove('popUpActive')

})


function renderF(dataPrev = []) {
    const data = JSON.parse(localStorage.getItem('data'))
    const taille = !data.length ? 0 : data.length
    if (taille === 0) {
        items.innerHTML = `<h1>Aucune donnée disponible</h1>`
    }
    console.log(data.findIndex((ele, index) => ele.id == 0), 63)
    if (dataPrev.length === 0)
        items.innerHTML = `
        ${data.map(ele => {
            return `
            <div class="item" id="itemCard">
                <div class="object">
                    ${ele.objet}
                </div>
                <div class="options">
                    <button class="delete" id="${ele.id}">Delete</button>
                    <button class="edit" id="${ele.id}">Edite</button>
                    <button class="valide">Valide</button>
                </div>
            </div>
            `
        }).join('')}
    `
    if (dataPrev != 0) {
        items.innerHTML = `
        ${dataPrev.map(ele => {
            return `
            <div class="item" id="itemCard">
                <div class="object">
                    ${ele.objet}
                </div>
                <div class="options">
                    <button class="delete" id="${ele.id}">Delete</button>
                    <button class="edit" id="${ele.id}">Edite</button>
                    <button class="valide">Valide</button>
                </div>
            </div>
            `
        }).join('')}
    `
    }
    const deletes = document.querySelectorAll('.delete')
    if (deletes)

        deletes.forEach(ele => {

            ele.addEventListener('click', (e) => {
                deleteF(parseInt(e.target.getAttribute("id")))
            })
        })

    const edites = document.querySelectorAll('.edit')
    const editPopUp = document.querySelector('.popUpEdit')
    if (edites)
        edites.forEach(edit => {

            edit.addEventListener('click', (e) => {
                editPopUp.style.display = "block"
                const textareaEdit = document.querySelector('#textareaEdit')
                textareaEdit.value = ''
                const id = e.target.getAttribute('id')
                let filtre = data.filter(ele => ele.id === Number(id))
                console.log(filtre[0].objet)
                textareaEdit.value = filtre[0].objet
                const btnEdit = document.querySelector('.btnEdit')

                btnEdit.addEventListener('click', (e) => {
                    editeF(id)
                    editPopUp.style.display = "none"


                })

            })
        })

}




function deleteF(id) {
    const data = JSON.parse(localStorage.getItem('data'))
    const index = data[data.findIndex(ele => ele.id === Number(id))]
    console.log(index)
    data.splice(data.findIndex(ele => ele.id === Number(id)), 1), 137
    localStorage.setItem('data', JSON.stringify(data))
    console.log(data)
    renderF()
}

function editeF(id) {
    const data = JSON.parse(localStorage.getItem('data'))
    const index = data[data.findIndex(ele => ele.id === Number(id))]
    const textareaEdit = document.querySelector('#textareaEdit')
    index.objet = textareaEdit.value
    console.log(data, 1181)
    localStorage.setItem('data', JSON.stringify(data))
    renderF()
}

function valideF(id) {

    const data = JSON.parse(localStorage.getItem('data'))
    const index = data[data.findIndex(ele => ele.id === Number(id))]
    // index
    renderF()
}


renderF(dataPrev = [])

