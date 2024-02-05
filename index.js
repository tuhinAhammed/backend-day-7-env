const express = require("express")
const dotenv = require("dotenv")
// const bodyParser = require('body-parser');
// var cors = require('cors')
dotenv.config()
const  route  = require("./Router")
const app = express()
const port = 3000
app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors())
app.use(route)

console.log(process.env.BASE_URL);

app.get("/" , (req ,res) => {
    res.send("Hello World")
})
app.listen(port , () => {
    console.log(`This Port Run for ${port}`)
})
