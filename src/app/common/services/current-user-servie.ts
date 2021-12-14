import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class CurrentUserService {

    private fisrtlogin = false;
    
    setCurrentUser(id: string, email: string, name: string): void {
        sessionStorage.setItem('ID', id);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', name);
    }

    
    getRole() {
        return sessionStorage.getItem('ROLE');
    }

    isLogged() {
        return sessionStorage.getItem('ACCESS_TOKEN') != null && sessionStorage.getItem('ID') != null;
    }
    isFirstLogin() {
        return this.fisrtlogin;
    }

    getUserId() {
        return sessionStorage.getItem('ID');
    }

    getEmail() {
        return sessionStorage.getItem('EMAIL');
    }

    getName() {
        return sessionStorage.getItem('NAME');
    }

    getAccessToken() {
        return sessionStorage.getItem('ACCESS_TOKEN');
    }

    getRefreshToken() {
        return sessionStorage.getItem('REFRESH_TOKEN');
    }

    getSessionId() {
        return sessionStorage.getItem('SESSIONID');
    }

}