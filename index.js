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
                editPopUp.style.top = "-20em"
                const textareaEdit = document.querySelector('#textareaEdit')
                textareaEdit.value = ''
                const id = e.target.getAttribute('id')
                let filtre = data.filter(ele => ele.id === Number(id))
                // console.log(filtre[0].objet)
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
    // console.log(data, 1181)
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



// // t[h?].{2,}[e\s(\W?)[y$]


// function domainName(url) {
//     //your code here
//     return url.match(/((?![http|https|www]))\w+(\.)+(?!\s[a-z]{2,})/gm)[0].split('.')[0]
//     // return url.match(/.*\w+\.+(?!\s[com])/)[0].split('.')[0]
// }

// console.log(domainName("http://google.com"))
// console.log(domainName("www.xakep.ru"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("http://trqdkcdahx1f.com/users"))

// const str = "Hello Boom"
// // const regex = /\w+(?=\sWorld)/g
// // const regex = /foo(?!bar)/g
// const regex = /(?<!foo)bar/g
// console.log(regex.test("basebar"))
// console.log(regex.test("foobar"))

// const str = "abc"


// console.log(str.match(//))

// const regex = /a(b|bc)c/g; // No atomic group
// const str1 = "abc";
// const str2 = "abcc";

// console.log(str1.match(/\w{3}/)); // ["abc", "b"]
// console.log(str2.match(/^abc{1}$/g)); // null


// const str1 = "abc";
// const str2 = "abcc";
// const regex = /a(b|bc)c/g


// console.log(Array.from(str1.match(regex))); // ["abc", "b"]
// console.log(Array.from(str2.match(regex))); // null


// const result = regex.exec("2025-02-28");
// console.log(result.groups);
// // Output: { year: "2025", month: "02", day: "28" }

// const regex = /\W/
// // console.log(regex.test("Ω")); // true
// // console.log(regex.test("A")); // false
// // console.log(regex.test("♠")); // false
// console.log(regex.test("あ")); // true (Hiragana character)
// // console.log(regex.test("ア")); // false (Katakana character) windows ;
// console.log(regex.test("😀")); // true
// console.log(regex.test("😂")); // true
// console.log(regex.test("❤️")); // true
// console.log(regex.test("👍")); // true
// console.log(regex.test("🎉")); // true

// const regex2 = /\d/

// console.log("🎉".codePointAt(0).toString(16))
// console.log(regex2.test("5")); // true
// console.log(regex2.test("a")); // false