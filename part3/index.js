require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Note = require('./models/note');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('build'))

const generateId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
    return maxId + 1;
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})

app.get('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {
        if (note) {
            res.json(note)
        } else {
            res.status(404).end()
        }
    })
        .catch(error => {
            console.log(error)
            response.status(500).end()
        })
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
})

app.post('/api/notes', (req, res) => {
    const body = req.body;
    if (body.content === undefined) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })

    note.save().then(savedNote => {
        res.json(savedNote);
    })
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
}

app.use(unknownEndpoint)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})