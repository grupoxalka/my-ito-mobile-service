import { Controller, Get, Param } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsDto } from './dto/credits.dto';

@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get(':student_id')
  getCredits(@Param('student_id') studentId: string): CreditsDto {
    return this.creditsService.findCreditsByStudentId(studentId);
  }
}
