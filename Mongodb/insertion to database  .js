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

    db.collection('users').insertMany([
        {   _id : id,
            name : 'Vikram',
            age : 28
        },
    ],(error , result) =>{
        if(error)
        {
        return    console.log('Unable to connect to user')

        }

        console.log(result.ops)

    }
        
    )
    
    
    

//     db.collection('users').insertOne({
//         name: 'Andrew',
//         age: 27
//     },(error,result)=>{
//         if(error){
//             return console.log('Unable to insert user')

//         }

//         console.log(result.ops)
//     })
// })






})