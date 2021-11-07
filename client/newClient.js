const groceryContainer = document.querySelector('ul')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/groceries`

const groceryListItem = (groceryListItem) => {
    let list = document.createElement('li')
    list.classList.add('grocery-list-item')

    list.innerHTML = `<button onclick="deleteItem(${groceryListItem.id})">X</button><span>${groceryListItem.item}</span><button onclick="updateQuantity(${groceryListItem.id},'minus')">-</button><span class="item-qty">${groceryListItem.quantity}</span><button onclick="updateQuantity(${groceryListItem.id},'plus')">+</button>`

    groceryContainer.appendChild(list)
}

//The GET
const groceryButton = document.querySelector('#groceryButton')
groceryButton.addEventListener('click', () => {
    
        axios.get(baseURL)
            .then( (response) => {
                let groceryArray = response.data
                groceryContainer.innerHTML = ``
                for (i=0; i<groceryArray.length; i++) {
                    groceryListItem(groceryArray[i])
                }

            })
                  
});


//The POST
const createListItem = body => axios.post(baseURL, body).then(groceryListItem)

const addButton = document.querySelector('#add')
addButton.addEventListener('click', () => {
    let item = document.querySelector('#input')
    let quantity = document.querySelector('#qty')
    let bodyObj = {item: item.value,
                   quantity: quantity.value
                }

    createListItem(bodyObj)
}); 

//The DELETE
//*MUST CLICK TO SEE GROCERY LIST FOR UPDATE*/
const deleteItem = (id, event) => {
    axios.delete(`${baseURL}/${id}`)
    .then(groceryListItem)
}

//The PUT
//**THIS IS BUGGY BUT ALSO MUST CLICK TO SEE GROCERY LIST FOR UPDATE */
const updateQuantity = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(groceryListItem)

