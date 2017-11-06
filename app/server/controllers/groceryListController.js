const GroceryService = require('../service').groceryService;

module.exports = {
    createlist(req, res) {
        return GroceryService
            .createList({
                name: req.body.name,
                purchased: req.body.purchased,
            })
            .then(() => {
                res.status(200).send({
                    status: 1,
                    message: 'success'
                })
            })
            .catch(error => res.status(400).send(error));
    },
    getlist(req, res) {
        return GroceryService
            .listAll()
            .then(groceryLists => res.status(200).send(groceryLists))
            .catch(error => res.status(400).send(error));
    },
};