const { Router } = require('express');


const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

const router = Router();


router.get('/', (req, res) => {
    res.render('index', { messages: messages })
});

router.post('/new', (req, res) => {

   const { AuthorName: authorName, message } = req.body;


    messages.push({
        text: message,
        user: authorName,
        added: Date.now()
    });
    res.redirect('/')
});

module.exports = {
    router
}