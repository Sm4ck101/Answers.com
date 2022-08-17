const router = require('express').Router();
const { Answer } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Answer.findAll()
        .then(dbAnswerData => res.json(dbAnswerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Answer.create({
        Answer_text: req.body.Answer_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbAnswerData => res.json(dbAnswerData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Answer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbAnswerData => {
            if (!dbAnswerData) {
                res.status(404).json({ message: 'No answer found with this id!' });
                return;
            }
            res.json(dbAnswerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
