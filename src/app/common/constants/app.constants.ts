import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    static oauth2ClientID = "num-api-client-id"
    static oauth2ClientPassword = "num-api-client-password"

    static validatePassword(password) {
        var passwordRegx = /^(?!.*([A-Za-z0-9])\1{2})(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/g;
        var flag = passwordRegx.test(password);
        return flag;
    }
}
