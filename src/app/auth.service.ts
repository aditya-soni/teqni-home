import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(
        private route:Router
    ){}
    token:string;

    signUpUser(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(
            res=>{
                firebase.auth().currentUser.sendEmailVerification()
                .then(
                    res=>{
                        alert('A verification email has been sent to '+email);
                        this.route.navigate(['/']);
                    }
                )
                .catch(
                    error=>{console.log('error')}
                );
            }
        )
        .catch(
            error=> alert('Please enter valid details.')
        );
    }

    signInUser(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            res=>{
                this.route.navigate(['/home'])
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token:string)=>{
                        this.token=token;
                    }
                );
            }
        )
        .catch(
            error=>alert('Please enter correct details.')
        )
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=>{
                this.token=token;
            }
        );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    onReset(email:string){
        var auth = firebase.auth();        
        auth.sendPasswordResetEmail(email).then((res)=>{
            alert('A verification email has been sent to '+ email)
          this.route.navigate(['/']);
        }).catch((error)=>{
          alert('Email not found. Please enter a valid Email address.')
        });
    }
}