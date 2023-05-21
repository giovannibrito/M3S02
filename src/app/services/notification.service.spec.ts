import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NotificationService } from './notification.service';
import { HttpClient } from '@angular/common/http';
import { NOTIFICATIONS_MOCK } from '../utils/notifications-mock';
import { INotificacao } from '../models/notificacao.model';

describe('NotificationService', () => {
  let httpTestingController: HttpTestingController;
  let notificationService: NotificationService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotificationService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    notificationService = TestBed.inject(NotificationService);
  });

  it('Deve criar o serviço', () => {
    expect(notificationService).toBeTruthy();
  });

  it('getNotificationsApi - deve executar o método com sucesso', () => {
    notificationService.getNotificationsApi().subscribe();

    const resultado = httpTestingController.expectOne(
      `${notificationService.BASE_URL}`
    );

    expect(resultado.request.method).toEqual('GET');
  });

  it('getNotifications - deve retornar o mock de notificacoes', () => {
    let mock: INotificacao[] = [];

    notificationService.getNotifications().subscribe((data) => {
      mock = data;
    });

    expect(mock).toEqual(NOTIFICATIONS_MOCK);
  });

  it('addNotificationApi - deve adicionar um objeto com sucesso', () => {
    const request: INotificacao = {
      aplicativo: 'Aplicativo',
      titulo: 'Titulo',
      descricao: 'Descricao',
      tempoPublicacao: 'Timestamp',
      imagem: 'URL',
    };
    notificationService.addNotificationApi(request).subscribe();

    const resultado = httpTestingController.expectOne(
      `${notificationService.BASE_URL}`
    );

    expect(resultado.request.method).toEqual('POST');
    expect(resultado.request.body).toEqual(request);
  });

  it('editNotificationApi - deve atualizar os dados com sucesso', () => {
    const request = { id: 1, valor: 'Exercicio teste unitario', ativo: true };
    notificationService.editNotificationApi(request).subscribe();

    const resultado = httpTestingController.expectOne(
      `${notificationService.BASE_URL}/${request.id}`
    );
    expect(resultado.request.method).toEqual('PUT');
    expect(resultado.request.body).toEqual(request);
  });

  it('removeNotification - deve remover um registro com sucesso', () => {
    const request = { id: 1, valor: 'Exercicio teste unitario', ativo: true };
    notificationService.removeNotification(request.id).subscribe();

    const resultado = httpTestingController.expectOne(
      `${notificationService.BASE_URL}/${request.id}`
    );
    expect(resultado.request.method).toEqual('DELETE');
  });
});
