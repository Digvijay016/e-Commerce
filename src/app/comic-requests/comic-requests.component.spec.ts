import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRequestsComponent } from './comic-requests.component';

describe('ComicRequestsComponent', () => {
  let component: ComicRequestsComponent;
  let fixture: ComponentFixture<ComicRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
