import { TestBed } from '@angular/core/testing';
import { AppErrorHandler } from './app-error-handler';

describe('AppErrorHandler', () => {
  it('should create an instance', () => {
    const appErrorHandler: AppErrorHandler = TestBed.inject(AppErrorHandler);
    expect(appErrorHandler).toBeTruthy();
  });
});
