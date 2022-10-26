import WebService from "./webService";

const AuthService = {
    loginUser: async (username: string, password: string) => {
        return WebService.request('/auth/login', 'POST', {
            username: username,
            password: password,
        }, true, {});
    }
};

export default AuthService;
