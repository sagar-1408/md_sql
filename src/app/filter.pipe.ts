import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class PostsFilterPipe implements PipeTransform {

  constructor() {}

  transform(posts: any[], searchText: any): any[] {

    if (!posts) { return []; }
    if (!searchText) { return posts; }
      searchText = searchText.toLowerCase();
        return posts.filter( s => {
          if (s && s.customer_code !== undefined) {
            return String(s.customer_code).toLowerCase().includes(searchText);
          }else {
            return false;
          }
        });
   }
}
