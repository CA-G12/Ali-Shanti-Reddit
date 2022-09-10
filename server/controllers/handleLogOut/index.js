const handleLogout = (req,res)=>{
    res.clearCookie('access_token').json({msq : 'logout'});
}
module.exports = {handleLogout};