 import { Account, Client, ID } from "appwrite";
 import config from '../config/config'

 export class AuthService{
   client = new Client();
   account;

   constructor(){
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    
    this.account = new Account()
   }


   //CREATE ACCOUNT
   async createAccount (email, password, name){
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount){
        //Call a method
      }else{
        return userAccount
      }

    } catch (error) {
      throw console.log("Account creation :: error", error)
    }
   }

   //LOG IN

   async login(email, password){
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw console.log("Log in :: error", error)

    }
   }

   async logout(){
    try {
      return await this.account.deleteSessions()
    } catch (error) {
      throw console.log("Logout:: error", error)

    }
   }

   async getCurrentUser(){
    try {
     return await this.account.get()
    } catch (error) {
      throw console.log("Error", error)
    }
    return null
   }
 }
const authService = new AuthService();
export default authService


