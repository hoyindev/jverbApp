import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsDetailsComponent } from './verbs-details.component';

describe('VerbsDetailsComponent', () => {
  let component: VerbsDetailsComponent;
  let fixture: ComponentFixture<VerbsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
