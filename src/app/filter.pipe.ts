import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'postsFilter'
})
@Injectable()
export class PostsFilterPipe implements PipeTransform {

  constructor(){}

  transform(posts: any[], searchText: string): any {
    console.log (posts);
    console.log (searchText);

    if(!posts) return [];
    if(!searchText) return posts;
      searchText = searchText.toLowerCase();
        return posts.filter( s => {
          if(s && s.business_partner_name != undefined){
            return s.business_partner_name.toLowerCase().includes(searchText);
          }else
            return false;
        });
   }
}