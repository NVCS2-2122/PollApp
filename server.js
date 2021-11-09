const express = require('express')
const app = new express()
const sqlite = require('sqlite3')
const db = new sqlite.Database('pollapp.db',() => {
    console.log("database connection opened")
})

app.use(express.static("./client/build"))

app.get("/question",(req,res)=>{
    let _questions
    const sql = "SELECT * FROM questions"
    db.all(sql,(err,questions)=>{
        //console.info(questions)
        const sql2 = "SELECT * FROM options"
        db.all(sql2,(err,options) => {
            questions.forEach(question => {
                question.options = options.filter(o => 
                    o.question_id == question.id    
                )
            })
            _questions = questions
            console.info(_questions)
            res.json(_questions)
        })        
    })
    
    
})

app.post("/question/:id",(req,res)=>{
    console.log(req.params.id,req.body) //log answer
    res.send("Thanks for your answer!")
})

app.listen(8080,()=>{
    console.log("server started")
})