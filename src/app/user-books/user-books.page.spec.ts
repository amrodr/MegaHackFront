import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserBooksPage } from './user-books.page';

describe('UserBooksPage', () => {
  let component: UserBooksPage;
  let fixture: ComponentFixture<UserBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserBooksPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
