import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contentfulService = inject(ContentfulService)

  blogpost$ : Observable<any> | null = null

  ngOnInit(): void{
    this.blogpost$ = this.contentfulService.getAllEntries()
  }
}
