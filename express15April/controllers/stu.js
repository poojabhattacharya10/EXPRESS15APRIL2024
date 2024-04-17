const users = require('../MOCK_DATA.json')
const fs = require('fs')

const getData = (req,res) => {
    res.json(users)
}

const createData = (req , res) => {
    let data = req.body
    console.log(data.length, 'before');
    users.push(data);
    console.log(data.length, 'after');
    fs.writeFile('MOCK_DATA.json' , JSON.stringify(users) , (err)=> {
        console.log(err)
    })
    console.log(data);
    // console.log('post request');
    res.end('<h1> This is post request </h1>')
}

const updateData = (req,res) => {
    let index = users.findIndex((user) => user.id === parseInt(req.params.id))
    console.log(index , 'index');
    users[index].first_name = 'Harry'
    fs.writeFile('MOCK_DATA.json' , JSON.stringify(users) , (err)=> {
        console.log(err)
    })
    // console.log('update request');
    res.end('<h1> This is put request </h1>')
}


const deleteData = (req,res) => {
    console.log('delete request');
    res.end('<h1> This is delete request </h1>')
}

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
}