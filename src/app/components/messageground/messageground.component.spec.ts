import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagegroundComponent } from './messageground.component';

describe('MessagegroundComponent', () => {
  let component: MessagegroundComponent;
  let fixture: ComponentFixture<MessagegroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagegroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
