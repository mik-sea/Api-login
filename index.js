const app = require('express')()
const bodyParser = require('body-parser')

const users = {}

app.use(bodyParser.json())
app.get('/', (_, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
        const { body } = req
        users[body.email] = body

        console.log(users)
        return res.json(body)
})

app.listen(3000, console.log('App started on port 3000'))