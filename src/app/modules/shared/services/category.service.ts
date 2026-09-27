import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    const endpoint = `${baseUrl}/categories`
    return this.http.get(endpoint)
  }

  saveCategorie(body: any){
    const endpoint = `${baseUrl}/categories`
    return this.http.post(endpoint, body)
  }

  updateCategory(body: any, id: number){
    const endpoint = `${baseUrl}/categories/${id}`
    return this.http.put(endpoint, body)
  }

  deleteCategory(id: number){
    const endpoint = `${baseUrl}/categories/${id}`
    return this.http.delete(endpoint)
  }

  getCategoryById(id: number){
    const endpoint = `${baseUrl}/categories/${id}`
    return this.http.get(endpoint)
  }
}
