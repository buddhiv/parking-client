import Cookies from 'js-cookie';

const CookieService = {
    setCookie: (name: string, value: any) => {
        Cookies.set(name, value);
    },
    getCookie: (name: string) => {
        return Cookies.get(name);
    },
    removeCookie: (name: string) => {
        Cookies.remove(name);
    }
}

export default CookieService;
