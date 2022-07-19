const express = require('express');
const app = express();

app.use(express.json());

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0;
    return maxId + 1;
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get('/api/persons', (req, res) => {
    res.json(persons);
})

app.get('/info', (req, res) => {
    const time = new Date();

    const amount = `Phonebook has infor for ${persons.length} people`
    res.send(`<p>${amount}</p><p>${time}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(single => single.id === id);

    if (person) {
        res.json(person)
    } else {
        return res.status(404).json({
            error: 'requested person is not found'
        });
    }
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})