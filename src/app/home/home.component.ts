import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic/comic.service';
import { Comics } from '../shared/models/comic';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comics: Comics[] = [];
  changeText: boolean;
  constructor(private cs:ComicService, private router:ActivatedRoute, private modalService: NgbModal, private route:Router) { this.changeText = false;}

  ngOnInit(): void {
    this.comics = this.cs.getAll();
    this.router.params.subscribe(params =>{
        if(params['searchItem'])
        this.comics = this.cs.getAll().filter(comic => comic.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        else if(params['genre'])
        this.comics = this.cs.getAllComicByGenre(params['genre'])
        else
        this.comics = this.cs.getAll();
    })
  }

  closeResult: string = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
    
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  comicId(item: Comics){
    const Id = item ? item.id: null;
    // console.log(Id);
    // console.log(['/comic/:', { id: Id }]);
    this.route.navigate(['/comic/:', { id: Id }]);
  }
  
}
