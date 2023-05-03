import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboarddisplayComponent } from './Dashboard.component';
//import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CarddisplayComponent', () => {
  let component: DashboarddisplayComponent;
  let fixture: ComponentFixture<DashboarddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarddisplayComponent ],
      //imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
