import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrecardComponent } from './genrecard.component';

describe('GenrecardComponent', () => {
  let component: GenrecardComponent;
  let fixture: ComponentFixture<GenrecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenrecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
