import { Injectable, NotFoundException } from '@nestjs/common';
import { GradesDto } from './dto/grades.dto';

@Injectable()
export class GradesService {
  // Datos en duro para calificaciones
  private readonly grades: Map<string, GradesDto> = new Map([
    [
      '1',
      {
        average_grade: 9.1,
        semesters: [
          {
            semester_number: 1,
            grade: 8.8,
          },
          {
            semester_number: 2,
            grade: 9.0,
          },
          {
            semester_number: 3,
            grade: 9.2,
          },
          {
            semester_number: 4,
            grade: 9.3,
          },
          {
            semester_number: 5,
            grade: 9.1,
          },
          {
            semester_number: 6,
            grade: 9.2,
          },
        ],
      },
    ],
    [
      '2',
      {
        average_grade: 8.7,
        semesters: [
          {
            semester_number: 1,
            grade: 8.5,
          },
          {
            semester_number: 2,
            grade: 8.7,
          },
          {
            semester_number: 3,
            grade: 8.9,
          },
          {
            semester_number: 4,
            grade: 8.8,
          },
        ],
      },
    ],
  ]);

  findGradesByStudentId(studentId: string): GradesDto {
    const studentGrades = this.grades.get(studentId);

    if (!studentGrades) {
      throw new NotFoundException(
        `Calificaciones del estudiante ${studentId} no encontradas`,
      );
    }

    return studentGrades;
  }
}
