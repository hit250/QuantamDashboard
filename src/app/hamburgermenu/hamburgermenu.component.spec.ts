//import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgermenuComponent } from './hamburgermenu.component';

describe('HamburgermenuComponent', () => {
  let component: HamburgermenuComponent;
  let fixture: ComponentFixture<HamburgermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgermenuComponent ],
      //imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
