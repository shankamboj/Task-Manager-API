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

    db.collection('users').findOne({
        _id:"5cfea3175cbe8333602b5d39" },(error,user) => {
            if(error)
            {
            return  console.log('Unnable to fetch')
            }
            console.log(user)
        
    })

    db.collection('users').find( { age : 27 } ) .toArray((error, users) =>{
        console.log(users)
    })

    db.collection('users').find( { age : 27 } ) .count((error, count) =>{
        console.log(count)
    })




})