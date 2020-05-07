// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// Above 3 lines code is replaced with foll one line code
const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

//    const p = db.collection('users').updateOne({
//        _id: new ObjectID("5cfe98d2fd9a212da0809eef")
//    }, {
//        $set: {
//             name : "mike"
//        }
//     })
    
//    p.then((result)=>{
//        console.log(result)
//    }).catch((error) => {
//        console.log(error)
//    })

db.collection('tasks').updateMany({
    completed: false
},
{
    $set : {
    completed : true
    
    }
}).then((result)=>{
    console.log(result)

}).catch((error)=>{
    console.log(error)
})


}) 