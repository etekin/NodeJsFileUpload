
var express =   require("express");
var multer  =   require('multer');
var app = express();



app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname);
    }
});

var upload = multer({ storage : storage}).single('uploadedFile');

app.post('/repo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});