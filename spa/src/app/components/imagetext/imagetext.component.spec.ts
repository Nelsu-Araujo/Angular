import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetextComponent } from './imagetext.component';

describe('ImagetextComponent', () => {
  let component: ImagetextComponent;
  let fixture: ComponentFixture<ImagetextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagetextComponent]
    });
    fixture = TestBed.createComponent(ImagetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
