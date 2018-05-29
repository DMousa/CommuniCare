import { HospiatlHomeModule } from './hospiatl-home.module';

describe('HospiatlHomeModule', () => {
  let hospiatlHomeModule: HospiatlHomeModule;

  beforeEach(() => {
    hospiatlHomeModule = new HospiatlHomeModule();
  });

  it('should create an instance', () => {
    expect(hospiatlHomeModule).toBeTruthy();
  });
});
