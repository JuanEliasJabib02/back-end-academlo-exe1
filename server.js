// En server va todo lo que tenga que ver con encender el servidor
const { app } = require('./app')
// Utils
const { db } = require('./utils/database.util')

db.authenticate()  
.then(() => console.log("db aunthenticated"))
.catch(err => console.log(err))

db.sync() 
    .then(() => console.log("db sync")) 
    .catch(err => console.log(err));

app.listen(4222, () => {
    console.log("express are runinnn")
    
});

