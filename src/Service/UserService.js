import axios from "./custom-axios";

class UserService {
    registerUser(user){
        return axios.post("/signup",user)
    }

    getToken(){
        return localStorage.getItem('USER_KEY');
    }
    userLogin(authRequest){
        return axios.post("/login",authRequest);
    }
    getUserData(){
        axios.get('/login/userInfo', {
            headers: {
                'Authorization':'Bearer '+ this.getToken()
            }
        })
    }

}

export default new UserService();