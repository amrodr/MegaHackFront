import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalizeBookPage } from './finalize-book.page';

describe('FinalizeBookPage', () => {
  let component: FinalizeBookPage;
  let fixture: ComponentFixture<FinalizeBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizeBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
