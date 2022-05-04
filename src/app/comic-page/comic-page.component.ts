import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Comics } from '../shared/models/comic';
import { ComicService } from '../services/comic/comic.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {

  comic!:Comics;
  constructor(private activateRoute:ActivatedRoute, private cs:ComicService, private cartService:CartService,private router:Router) { 

    activateRoute.params.subscribe((params) => {
      if(params['id']){
        this.comic = cs.getComicById(params['id'])
        // console.log(this.comic)
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.comic);
    this.router.navigateByUrl('/cart-page');
  }

}
