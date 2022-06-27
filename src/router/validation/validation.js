var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
.is().min(8)
.has().uppercase() 
.has().lowercase()  
.has().digits(2)