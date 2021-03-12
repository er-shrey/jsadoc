import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsadocComponent } from './jsadoc.component';

describe('JsadocComponent', () => {
  let component: JsadocComponent;
  let fixture: ComponentFixture<JsadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
