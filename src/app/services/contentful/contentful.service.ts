import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    accessToken: environment.accessToken,
    space: environment.spaceId
  })

  getAllEntries(){
    const promise = this.client.getEntries()
    // this.client.getEntries().then((entries) => {
    //   console.log(entries)
    // }).catch(error => {
    //   console.error(error)
    // })
    return from(promise)
  }
}
