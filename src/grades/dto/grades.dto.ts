export class SemesterGradeDto {
  semester_number: number;
  grade: number;
}

export class GradesDto {
  average_grade: number;
  semesters: SemesterGradeDto[];
}
