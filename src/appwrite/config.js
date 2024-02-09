import { config } from '../config/config';
import {Client, Databases, Storage, Bucket, Query, ID} from 'appwrite'

export class Service{
  client = new Client()
  databases;
  
  storage;

  constructor(){
    this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);
    
    this.databases = new Databases(this.client)
    this.storage = new Storage(this.client)
  }

  async createPost({title, slug, content, featuredImage, status, userId }){
    try {
      return await this.databases.createDocument( 
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
      })
      
    } catch (error) {
      throw console.log('Post creation error ::', error)
    }
  }

  async updatePost (slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      throw console.log('Post updation error ::', error)
    }
  }

  async deletePost(slug){
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } catch (error) {
      throw console.log('Post deletion error ::', error)
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } catch (error) {
      throw console.log('Post-get error ::', error)
    }
  }
  
  async getPosts(queries = [Query.equal('status', "active")]){
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      )
    } catch (error) {
      throw console.log('Posts-get error ::', error)
    }
    return false
  }

  async uploadFile (file){
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      throw console.log('Uploading error ::', error)
    }
  }

  async deleteFile (fileId){
    try {
      return await this.storage.deleteFile(
        config.appwriteBucketId,
        fileId
      )
    } catch (error) {
      throw console.log('File deletion error ::', error)

    }
  }

  getFilePreview(fileId){
    this.storage.getFilePreview(
      config.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service()
export default service