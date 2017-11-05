const Todo = require('../../../db/models').Todo;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        details: req.body.details,
        status: req.body.status,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
};