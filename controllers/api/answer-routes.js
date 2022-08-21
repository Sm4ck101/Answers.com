const router = require("express").Router();
const { Answer } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Answer.findAll()
    .then((dbAnswerData) => res.json(dbAnswerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Answer.create({
    answer_text: req.body.answer_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    .then((dbAnswerData) => res.json(dbAnswerData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Answer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbAnswerData) => {
      if (!dbAnswerData) {
        res.status(404).json({ message: "No answer found with this id!" });
        return;
      }
      res.json({ message: "Answer deleted successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// TO DO:
// 1. Get one answer route implementation
// 2. Edit one answer
