import { TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationAddComponent } from '../notification-add/notification-add.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { of } from 'rxjs';

describe('Componente: Content', () => {
  let notificationService = jasmine.createSpyObj(NotificationService, [
    'getNotifications',
    'editNotificationApi',
    'removeNotification',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent, NotificationAddComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [
        { provide: NotificationService, useValue: notificationService },
      ],
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

  it('lerNotificacao - Deve chamar atualizarLista com sucesso', () => {
    let fixture = TestBed.createComponent(ContentComponent);
    let app = fixture.componentInstance;
    spyOn(app, 'atualizarLista');
    notificationService.editNotificationApi.and.returnValue(of({}));
    app.lerNotificacao({
      aplicativo: 'Teste',
      titulo: 'Teste',
      descricao: 'Teste',
      tempoPublicacao: 'Teste',
      imagem: 'Teste',
    });

    expect(app.atualizarLista).toHaveBeenCalled();
  });
});
