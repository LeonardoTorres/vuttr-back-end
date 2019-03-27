

class AuthController {

    constructor(authService){
        this._authService = authService;
        
    }

    signIn(req, res){
        const token = this._authService.getToken();
        res.send(token);
    }
}

module.exports = authService => {
    return new AuthController(authService);
}