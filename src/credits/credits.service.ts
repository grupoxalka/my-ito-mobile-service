import { Injectable, NotFoundException } from '@nestjs/common';
import { CreditsDto } from './dto/credits.dto';

@Injectable()
export class CreditsService {
  // Datos en duro para créditos
  private readonly credits: Map<string, CreditsDto> = new Map([
    [
      '1',
      {
        current_credits: 180,
        remaining_credits: 70,
      },
    ],
    [
      '2',
      {
        current_credits: 120,
        remaining_credits: 130,
      },
    ],
  ]);

  findCreditsByStudentId(studentId: string): CreditsDto {
    const studentCredits = this.credits.get(studentId);

    if (!studentCredits) {
      throw new NotFoundException(
        `Créditos del estudiante ${studentId} no encontrados`,
      );
    }

    return studentCredits;
  }
}
