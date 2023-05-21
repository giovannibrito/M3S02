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
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Deve chamar carregarNotificacoes com sucesso', () => {
    let fixture = TestBed.createComponent(ContentComponent);
    let app = fixture.componentInstance;
    spyOn(app, 'carregarNotificacoes');
    app.ngOnInit();
    expect(app.carregarNotificacoes).toHaveBeenCalled();
  });
});
