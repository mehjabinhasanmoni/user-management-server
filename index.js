const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

const users= [
    {
    id :1, name : 'Sabana', email: 'sabana@gmail.com'},
    {id :2, name : 'Sabnur', email: 'sabnur@gmail.com'},
    {id :3, name : 'Sabila', email: 'sabila@gmail.com'},
]

app.get('/users', (req,res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('post API hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.get('/', (req, res) => {
    res.send('User Management is running');
})


app.listen(port, () =>{
    console.log(`server is running on port : ${port}`)
})
