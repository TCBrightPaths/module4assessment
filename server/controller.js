const groceries = require('./db.json');
let globalId = 6

module.exports = {
    getGroceries: (req, res) => res.status(200).send(groceries),
    addGroceries: (req, res) => {
        let { item, quantity } = req.body;
        let newItem = {
            id: globalId,
            item,
            quantity
        }
        groceries.push(newItem)
        res.send(groceries);
        globalId++
    },
    deleteGroceries: (req, res) => {
        let index = groceries.findIndex(elem => elem.id === +req.params.id)
        groceries.splice(index, 1)
        res.status(400).send(groceries)
    
    },
    updateGroceries: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = groceries.findIndex(elem => +elem.id === +id)

        if(type === 'plus') {
            groceries[index].quantity += 1
            res.status(200).send(groceries)
        } else if (type === 'minus') {
            groceries[index].quantity -= 1
            res.status(200).send(groceries)
        } else {
            res.sendStatus(404).console.log(`Input error: Please select type.`)
        }

    }
        
}