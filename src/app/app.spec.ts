import { ActivatedRoute } from "@angular/router";
import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";

describe('AppComponent',() => {
    let component : AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [AppComponent],
          declarations:[],
          providers: [
            {
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({}),
                }
            }
        ]
        }).compileComponents();
      });

    
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});