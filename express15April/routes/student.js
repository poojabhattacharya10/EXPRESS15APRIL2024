const express = require('express')
const stuControllers = require('../controllers/stu')
const router = express.Router()
// const users = require('../MOCK_DATA.json')
// const fs = require('fs')


router.use(express.json())
 
router.get('/' , (req,res) => {
    // res.end('<h1> This is get request </h1>')
    // res.json(users)
    stuControllers.getData(req,res)
})

router.post('/student/create' , (req,res) => {
    // let data = req.body
    // console.log(data.length, 'before');
    // users.push(data);
    // console.log(data.length, 'after');
    // fs.writeFile('MOCK_DATA.json' , JSON.stringify(users) , (err)=> {
    //     console.log(err)
    // })
    // console.log(data);
    // // console.log('post request');
    // res.end('<h1> This is post request </h1>')
    stuControllers.createData(req,res)
})


router.put('/student/update/:id' , (req,res) => {
    // let index = users.findIndex((user) => user.id === parseInt(req.params.id))
    // console.log(index , 'index');
    // users[index].first_name = 'Harry'
    // fs.writeFile('MOCK_DATA.json' , JSON.stringify(users) , (err)=> {
    //     console.log(err)
    // })
    // // console.log('update request');
    // res.end('<h1> This is put request </h1>')
    stuControllers.updateData(req,res)
})


router.delete('/student/delete/:id' , (req,res) => {
    // console.log('delete request');
    // res.end('<h1> This is delete request </h1>')
    stuControllers.deleteData(req,res)
})


module.exports = router