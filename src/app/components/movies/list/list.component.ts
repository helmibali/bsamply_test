import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  term;
  order="publication_date";
 
  movies:any= [];
  arrays:any = [];
  tempArray:any = [];
newArray:any = [];


  
  isLoading:boolean = false;
  errTXT:string='';
  constructor(private moviesService :MoviesService) { }

  ngOnInit(): void {
    this.initData();
  }



  initData(){
    this.isLoading=true;
    this.moviesService.getMoviesList().toPromise().then((res:any[])=>{
     // console.log(res);
      this.movies=res;
      this.arrays=res;

     
    })
    .catch(()=>this.errTXT="msg d'erreur").finally(()=>{
      this.isLoading = false;
    })
  }


  
 

   onSelectByCritics(e:any) {
   // console.log(e.target.checked);
    if (e.target.checked){
      this.tempArray = this.movies.filter((m:any) => m.critics_pick = 1);
     // console.log(this.tempArray);
      this.movies = [];
     this.newArray.push(this.tempArray);

     for(let i=0; i<this.newArray.length; i++ ){
      var firstArray = this.newArray[i];
      for(let i = 0 ; i<firstArray.length; i++){
        var obj = firstArray[i];
        this.movies.push(obj);
       // console.log(this.movies);
      }
     }
      
    }else{
      this.tempArray = this.movies.filter((m:any) => m.critics_pick = 0);
     // console.log(this.tempArray);
      this.movies = this.tempArray;
      
    }
  }


}
