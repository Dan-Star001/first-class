const express = require("express")
const ejs = require('ejs')
const app = express()
const port = 3027

const name = "Ramzy"
const age = 23;

const users = [
    {name: "Ramzy", age: 23},
    {name: "Ade", age: 22},
    {name: "John", age: 21},
]


const countries = [
    {
        name: 'Nigeria',
        population: 200_000_000,
        capital: "Abuja",
        president: "B.A.T."
    },
    {
        name: "Ghana",
        population: 58_000_000,
        capital: "Accra",
        president: "J.D.M"
    },
    {
        name: "USA",
        population: 320_000_000,
        capital: "Washington D.C",
        president: "D.T."
    },
    {
        name: "China",
        population: 1_400_000_000,
        capital: "Beijing",
        president: "X.J.P"
    },
    {
        name: "UK",
        population: 67_000_000,
        capital: "London",
        president: "King Charles"
    },
    {
        name: "North Korea",
        population: 25_000_000,
        capital: "Pyongyang",
        president: "K.J.U."
    }
]


app.set("view engine", "ejs")

app.get("/", (request, response) => {
    response.send("Welcome to our Server")    
})

app.get("/home", (req, res) => {
    res.send("Welcome Home")    
})

app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})  


app.get("/ejs", (req, res) =>{
    res.render("index", {age, users})
})

app.get("/ejshome", (req, res) =>{
    res.render("home", {name})
})


app.get("/country", (req, res) => {
    res.send(countries)
})


app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
    
})
