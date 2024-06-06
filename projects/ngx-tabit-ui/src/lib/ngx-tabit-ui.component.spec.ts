import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabitUiComponent } from './ngx-tabit-ui.component';

describe('NgxTabitUiComponent', () => {
  let component: NgxTabitUiComponent;
  let fixture: ComponentFixture<NgxTabitUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTabitUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTabitUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
