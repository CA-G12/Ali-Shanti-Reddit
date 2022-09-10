const { join } = require('path');

const serverError = (err,req,res,next)=>{
    const file = join(__dirname, '..', '..', '..', 'public','assets' ,'html', '500.html');
    res.status('500').sendFile(file);
};

module.exports = serverError;