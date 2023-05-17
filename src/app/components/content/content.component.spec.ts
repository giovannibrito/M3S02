import { TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationAddComponent } from '../notification-add/notification-add.component';
import { FormsModule } from '@angular/forms';

describe('Componente: Content', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent, NotificationAddComponent],
      imports: [HttpClientModule, FormsModule],
    });
  });

  it('Deve criar o componente', () => {
    let fixture = TestBed.createComponent(ContentComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
