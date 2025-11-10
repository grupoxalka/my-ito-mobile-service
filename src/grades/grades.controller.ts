import { Controller, Get, Param } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesDto } from './dto/grades.dto';

@Controller('grade')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get(':student_id')
  getGrades(@Param('student_id') studentId: string): GradesDto {
    return this.gradesService.findGradesByStudentId(studentId);
  }
}
