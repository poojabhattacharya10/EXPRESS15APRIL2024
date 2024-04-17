const express = require('express')
const app = express()
const connect = require('./connection')
const student = require('./routes/student')

app.use(student)
// app.get('/' , (req,res) => {
//     res.end('<h1> This is get request </h1>')
// })

// app.post('/student/create' , (req,res) => {
//     res.end('<h1> This is post request </h1>')
// })

// app.put('/student/update/:id' , (req,res) => {
//     res.end('<h1> This is put request </h1>')
// })


// app.delete('/student/delete/:id' , (req,res) => {
//     res.end('<h1> This is delete request </h1>')
// })

app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running at 3000');
    }
})