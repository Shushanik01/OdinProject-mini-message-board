const { Router } = import('express');


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

router.set('/views', messages)

router.get('/', (req, res) => {
    res.render('index', { messages: messages })
});

router.post('/new', (req, res) => {

    const { authorName } = req.body.AuthorName
    const { message } = req.body.message

    messages.push({
        text: message,
        user: authorName,
        added: Date.now()
    });

})