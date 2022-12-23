export  class BaseLogger{
    log(data){
       console.log("Default Logger : " + data )
    }
}

export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to mongoDB " + data)
    }
}

export  class AbcLogger extends BaseLogger{
    log(data){
        console.log("Logged to AbcDB " + data)
    }
}
