const GroceryList = require('../models').GroceryList;

module.exports = {
    createList(data) {
        return GroceryList.create(data)
            .then(response => {
                return response;
            });
    },
    listAll() {
        return GroceryList
            .all()
            .then(groceryLists => groceryLists);
    }

}