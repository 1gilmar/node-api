if(process.env.NODE_ENV != "production"){
    module.exports = {mongoURI: "mongodb+srv://root:jiraspiom@cluster0-2gq4v.gcp.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost:27017/nodeapi"}
}