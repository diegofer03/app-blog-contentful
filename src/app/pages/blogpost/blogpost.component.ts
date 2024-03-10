import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent {
  route = inject(ActivatedRoute)
  contentfulService = inject(ContentfulService)

  blogId = ''
  blogpost$ : Observable<any> | null = null

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogId = params['id']
      this.blogpost$ = this.contentfulService.getEntryById(this.blogId)
    })
  }

  _returnHtmlFromRichText(richText : any) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
