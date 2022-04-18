const Author = require("../models/author.model");

module.exports = {
  findAllAuthors: (req, res) => {
    Author.find({})
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => {
        console.log("findAllAuthors has failed!");
        console.log(err);
        res.json(err);
      });
  },

  createNewAuthor: (req, res) => {
    console.log("Body", req.body);
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => {
        console.log("createNewAuthor has failed!");
        res.status(400).json(err);
      });
  },

  findOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log(err);
        console.log("findOneAuthor has failed!");
        res.json(err);
      });
  },

  deleteOneAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deletedAuthor) => {
        console.log(deletedAuthor);
        res.json(deletedAuthor);
      })
      .catch((err) => {
        console.log(err);
        console.log("deleteOneAuthor has failed!");
        res.json(err);
      });
  },

  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
      })
      .catch((err) => {
        console.log(err);
        console.log("updateAuthor has failed!");
        res.status(400).json(err);
      });
  },
};
