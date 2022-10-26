import CookieService from "./cookieService";

const API: string = 'http://localhost:3000/api';

const WebService = {
    request: async (url: string, method: string, data: any, secured: boolean, options: any) => {

        console.log('url', url);
        console.log('method', method);
        console.log('data', data);
        console.log('secured', secured);

        const apiLocation = API + url;

        const headersObj: any = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        if (secured) {
            const authToken = CookieService.getCookie('authToken');
            headersObj.Authentication = `Bearer ${authToken}`;
        }

        const response = await fetch(apiLocation, {
            method: method,
            headers: headersObj,
            ...(['POST', 'PUT', 'PATCH'].includes(method) && {
                body: JSON.stringify(data)
            })
        });

        if ([200, 201].includes(response.status)) {
            return response.json();
        } else {
            return null;
        }
    }
};

export default WebService;
