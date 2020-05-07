require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5cff6b38b8c0122b1c5bb20e', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age  : 1 })

}).then((result)=>
{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})