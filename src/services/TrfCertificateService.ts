import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface TrfScoreBreakdown {
  listening?: number;
  reading?: number;
  writing?: number;
  speaking?: number;
  overall: number;
  cefrLevel: string;
}

export interface TrfSubCriteria {
  label: string;
  score: number | string;
  feedback?: string;
}

export interface TrfCertificateData {
  candidateName: string;
  candidateNumber?: string;
  testDate: string;
  testType: 'Academic' | 'General Training' | 'Diagnostic Assessment';
  module: 'Speaking' | 'Writing' | 'Reading' | 'Listening' | 'Full Mock' | 'Diagnostic';
  scores: TrfScoreBreakdown;
  subCriteria?: TrfSubCriteria[];
  examinerNotes?: string;
  verificationCode: string;
}

export class TrfCertificateService {
  static getCefrFromBand(band: number): string {
    if (band >= 8.5) return 'C2 (Mastery / Native-like)';
    if (band >= 7.0) return 'C1 (Effective Operational Proficiency)';
    if (band >= 5.5) return 'B2 (Independent Vantage)';
    if (band >= 4.0) return 'B1 (Threshold / Intermediate)';
    return 'A2 (Waystage / Elementary)';
  }

  static generateVerificationCode(module: string): string {
    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const modCode = module.substring(0, 3).toUpperCase();
    return `IT-${year}-${modCode}-${randomHex}`;
  }

  static generateCandidateNumber(): string {
    const num = Math.floor(100000 + Math.random() * 900000);
    return `UZ-${num}`;
  }

  static async exportToPdf(element: HTMLElement, filename: string = 'IELTS_Test_Report_Form.pdf'): Promise<void> {
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 mm
      const pageHeight = 297; // A4 mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, Math.min(imgHeight, pageHeight));
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  }

  static async exportToImage(element: HTMLElement, filename: string = 'IELTS_Test_Report_Form.png'): Promise<void> {
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating Image:', error);
      throw error;
    }
  }
}
