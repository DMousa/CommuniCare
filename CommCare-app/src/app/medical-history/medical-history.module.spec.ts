import { MedicalHistoryModule } from './medical-history.module';

describe('MedicalHistoryModule', () => {
  let medicalHistoryModule: MedicalHistoryModule;

  beforeEach(() => {
    medicalHistoryModule = new MedicalHistoryModule();
  });

  it('should create an instance', () => {
    expect(medicalHistoryModule).toBeTruthy();
  });
});
