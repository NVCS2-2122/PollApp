const express = require('express')
const app = new express()

const questions = [
    {
        "id":1,
        "title":"What are you doing after school?",
        "options":[
            {
                "id":1,
                "title":"Sport",
                "votes":0
            },
            {
                "id":2,
                "title":"Work",
                "votes":0
            },
            {
                "id":3,
                "title":"Chores",
                "votes":0
            },
            {
                "id":4,
                "title":"Study/HW",
                "votes":0
            },
            {
                "id":5,
                "title":"Sleep",
                "votes":0
            },
            {
                "id":6,
                "title":"Videogames",
                "votes":0
            },
            {
                "id":7,
                "title":"nonya bidness",
                "votes":0
            }
        ]
    }
]

app.use(express.static("./client/build"))

app.get("/question",(req,res)=>{
    res.json(questions)
})

app.post("/question/:id",(req,res)=>{
    console.log(req.params.id,req.body) //log answer
    res.send("Thanks for your answer!")
})

app.listen(8080,()=>{
    console.log("server started")
})