const groceryContainer = document.querySelector('ul')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/groceries`

const groceryListItem = (groceryListItem) => {
    let list = document.createElement('li')
    list.classList.add('grocery-list-item')

    list.innerHTML = `<span>${groceryListItem.item}</span>`

    //display each item in the json node array as list items in the unordered list element on the page

    groceryContainer.appendChild(list)
}

//The GET
const groceryButton = document.querySelector('#groceryButton')
groceryButton.addEventListener('click', () => {
    
        axios.get(baseURL)
            .then( (response) => {
                let groceryArray = response.data

                for (i=0; i<groceryArray.length; i++) {
                    groceryListItem(groceryArray[i])
                }

            })
                  
});


//The POST
const createListItem = body => axios.post(baseURL, body).then(groceryListItem)

const addButton = document.querySelector('#add')
addButton.addEventListener('click', () => {
    let item = document.querySelector('input')
    let bodyObj = {item: item.value}

    createListItem(bodyObj)
}); 

