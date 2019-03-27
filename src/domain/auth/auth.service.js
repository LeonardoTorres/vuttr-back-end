const jwt = require('jsonwebtoken');

class AuthService {
    
    constructor(){
        this._mySecret = process.env.SECRET;
    }

    getToken(){
       const id = Math.random();
       const token = jwt.sign({id}, this._mySecret, {
        expiresIn: 120
       });
       return { token };
    }

    isValidToken(token){      
       try{
           return jwt.verify(token, this._mySecret);
       }catch(error){
           return null;
       }  
    }
}

module.exports = new AuthService();
