import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndBookPage } from './end-book.page';

describe('EndBookPage', () => {
  let component: EndBookPage;
  let fixture: ComponentFixture<EndBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
