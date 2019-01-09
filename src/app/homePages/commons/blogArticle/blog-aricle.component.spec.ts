import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAricleComponent } from './blog-aricle.component';

describe('BlogAricleComponent', () => {
  let component: BlogAricleComponent;
  let fixture: ComponentFixture<BlogAricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
