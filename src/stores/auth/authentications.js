import { defineStore } from 'pinia';

export const useAuthenticationStore = defineStore("authStore", {
    state: () => ({
        token: null,
        user: null,
        errors: null,
        loading: false,
        url: 'https://api-staging.globalfleet.es/api/v1/',
    }),
    getters: {
        isLoggedIn: (state) => state.user !== null,
        userError: (state) => state.errors,
    },
    actions: {
        async login(token){
            try {
                const res = await fetch(`${this.url}auth/login/token`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                const response = await res.json();
      
                //Remove localStore
                if(localStorage.getItem('token')){
                    localStorage.removeItem('token');
                }
      
                if (response.success) {
                    this.user = response.user;
                    this.token = response.token;
                    localStorage.setItem('token', response.token);
                }else{
                    this.user = null;
                    this.errors = response.errors;
                }

            } catch (e) {
                console.log(e);
            }

        },
        async currentUser(){
            try {

                let tokenStorage = localStorage.getItem('token');

                const res = await fetch(`${this.url}auth/user`, {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${tokenStorage}`
                    }
                });
                
                const response = await res.json();

                if (response.success) {
                    this.user = response.data;
                }else{
                    this.user = null;
                    this.errors = response.errors;
                }

            } catch (e) {
                console.log(e);
            }
        },
        async logout(){
            try {
                let tokenStorage = localStorage.getItem('token');
                const res = await fetch(`${this.url}auth/logout`, {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${tokenStorage}`
                    }
                });

                const response = await res.json();

                if (response.success) {

                    this.user = null;

                    //Remove localStore
                    if(localStorage.getItem('token')){
                        localStorage.removeItem('token');
                    }

                }else{
                    this.errors = response.errors;
                }

            } catch (e) {
                console.log(e);
            }

        }

    }

});