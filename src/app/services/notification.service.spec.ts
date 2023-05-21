import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NotificationService } from './notification.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NOTIFICATIONS_MOCK } from '../utils/notifications-mock';

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
});
