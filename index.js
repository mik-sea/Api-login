const cors = require('cors')
const app = require('express')()
const bodyParser = require('body-parser')

const users = {}
const point = {}
const data = {}

app.use(bodyParser.json())
app.use(cors())

app.get('/', (_, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
        const { body } = req
        users[body.email] = body
        console.log(JSON.stringify(users, null, 2))
        const data = {}
        data.username = body.username
        data.email = body.email
        data.telephone  = body.telephone
        return res.json(data)
})
app.post('/login',(req,res)=>{
        const {body} = req
        var email = body.email
        if(email === '' && body.password){
            return res.json("Isi terlebih dahulu")
        }
        else if(users[email]){
            if(users[email].password == body.password){
                data.username = users[email].username
                data.email = users[email].email
                data.telephone  = users[email].telephone
                console.log(data)
                return res.json(data)
            }
            else{
                return res.json("password salah")
            }
        }
        else{
            console.log("gagal")
            return res.json("gagal")
        }
})
app.get("/list",(req,res)=>{
        return res.json(users)
})

app.post("/postPoint",(req,res)=>{
    const { body } = req
    point[body.token] = body
    // console.log(JSON.stringify(point,null,2))
    return res.json(body)
})
app.post("/getPoint",(req,res)=>{
    const { body } = req
    var token = body.token
    if(point[token]){
        console.log("ada tokennya")
    }else{
        console.log("gak ada token")
    }
})

// app.get("/prize",(req,res)=>{
//     const { body } = req
//     prize[body.nama] = body
//     console.log(JSON.stringify(prize))
// })

app.listen(3000, console.log('App started on port 3000'))