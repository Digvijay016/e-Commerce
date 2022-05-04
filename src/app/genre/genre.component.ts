import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicService } from '../services/comic/comic.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  comicGenreName : String = "";

  @Input()
  justifyContent:string='center';

  @Input()
  cartPageGenres?:string[];

  genres?: Genre[] = [];
  constructor(private cs: ComicService, private router: Router) { }

  ngOnInit(): void {
    if(!this.cartPageGenres)
    this.genres = this.cs.getAllGenre();
  }

  genreCount(genre: Genre){
    const Name = genre ? genre.name: "";
    this.comicGenreName = Name;
    // console.log(this.comicGenreName);
    this.router.navigate(['/genre',Name]);
  }

  genreName(genreName: string){
    // console.log(genreName);
    this.comicGenreName = genreName;
    this.router.navigate(['/genre',genreName]);
  }
}
