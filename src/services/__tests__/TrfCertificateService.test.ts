import { describe, it, expect } from 'vitest';
import { TrfCertificateService } from '../TrfCertificateService';

describe('TrfCertificateService', () => {
  it('correctly maps IELTS band scores to CEFR levels', () => {
    expect(TrfCertificateService.getCefrFromBand(9.0)).toContain('C2');
    expect(TrfCertificateService.getCefrFromBand(8.5)).toContain('C2');
    expect(TrfCertificateService.getCefrFromBand(7.5)).toContain('C1');
    expect(TrfCertificateService.getCefrFromBand(7.0)).toContain('C1');
    expect(TrfCertificateService.getCefrFromBand(6.5)).toContain('B2');
    expect(TrfCertificateService.getCefrFromBand(5.5)).toContain('B2');
    expect(TrfCertificateService.getCefrFromBand(5.0)).toContain('B1');
    expect(TrfCertificateService.getCefrFromBand(4.0)).toContain('B1');
    expect(TrfCertificateService.getCefrFromBand(3.5)).toContain('A2');
  });

  it('generates a valid verification code with module and year', () => {
    const currentYear = new Date().getFullYear();
    const code = TrfCertificateService.generateVerificationCode('Speaking');
    expect(code).toMatch(new RegExp(`^IT-${currentYear}-SPE-[A-Z0-9]+$`));
  });

  it('generates a valid candidate number in UZ format', () => {
    const candidateNumber = TrfCertificateService.generateCandidateNumber();
    expect(candidateNumber).toMatch(/^UZ-\d{6}$/);
  });
});
