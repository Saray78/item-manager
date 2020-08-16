import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemsMessageComponent } from './no-items-message.component';

describe('NoItemsMessageComponent', () => {
  let component: NoItemsMessageComponent;
  let fixture: ComponentFixture<NoItemsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoItemsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
