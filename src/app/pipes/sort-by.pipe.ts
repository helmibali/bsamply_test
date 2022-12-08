import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(movies: any[],field:string): any[] {
    if (!movies) return [];
    
    if (field)
    movies.sort((a, b) => a[field] < b[field] ? 1 : -1);
    else movies.sort((a, b) => a < b ? 1 : -1);
    return movies;
  }

}
// if (!movies) return [];
// if (field!== null)
//  movies.sort(function(a, b)  {
//  var dateA = new Date(a.field).getTime();
//  var dateB = new Date(b.field).getTime();
//  return dateA > dateB ? 1 : -1

// }

// );


// return movies;

// this.tempArray =this.movies.sort(function (a, b) {
//   var dateA = new Date(a.opening_date).getTime();
//   var dateB = new Date(b.opening_date).getTime();
//   return dateA < dateB ? 1 : -1; 
// });
