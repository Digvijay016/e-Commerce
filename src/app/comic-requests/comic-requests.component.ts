import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpDataService } from '../services/http-data.service';
import { ComicRequest } from '../shared/models/ComicRequest';


@Component({
  selector: 'app-comic-requests',
  templateUrl: './comic-requests.component.html',
  styleUrls: ['./comic-requests.component.css']
})
export class ComicRequestsComponent implements OnInit {

  formValue!: FormGroup;
  comicRequest: ComicRequest = new ComicRequest();
  comicData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  isEnabled !: boolean;

  constructor(private formbuilder: FormBuilder, private api: HttpDataService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      // id : {value: '', disabled: true},
      id: [''],
      name: [''],
      origins: [''],
      details: ['']
    })

    this.getAllComics();
  }

  AddComic() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postComicDetials() {
    this.comicRequest.id = this.formValue.value.id;
    this.comicRequest.name = this.formValue.value.name;
    this.comicRequest.origins = this.formValue.value.origins;
    this.comicRequest.details = this.formValue.value.details;

    this.api.postComics(this.comicRequest).subscribe(res => {
      console.log(res);
      alert("Comic Book Request posted successfully!!!!");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();

      this.getAllComics();
    },
      err => {
        alert("Something went wrong, Please check again")
      }
    )
  }

  getAllComics() {
    this.api.getComics().subscribe(res => {
      this.comicData = res;
    })
  }

  deleteComicsRequest(comic: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.api.deleteComics(comic.id).subscribe(res => {
        alert("This comic has been deleted!!!!");
        this.getAllComics();
      });
    }
  }

  EditComics(comic: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.isEnabled = false;
    this.comicData.id = comic.id;
    this.formValue.controls['id'].setValue(comic.id);
    this.formValue.controls['name'].setValue(comic.name);
    this.formValue.controls['origins'].setValue(comic.origins);
    this.formValue.controls['details'].setValue(comic.details);
  }

  UpdateComics() {
    this.comicRequest.id = this.formValue.value.id;
    this.comicRequest.name = this.formValue.value.name;
    this.comicRequest.origins = this.formValue.value.origins;
    this.comicRequest.details = this.formValue.value.details;

    // console.log(this.comicData);

    this.api.updateComics(this.comicRequest, Number(this.comicRequest.id)).subscribe(res => {
      alert("Student records updated!!");

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();

      this.getAllComics();
    });
  }

}
