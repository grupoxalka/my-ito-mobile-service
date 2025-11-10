import { Injectable, NotFoundException } from '@nestjs/common';
import {
  SubjectDto,
  ScheduleDto,
  SubjectDetailDto,
  TodayScheduleDto,
  ClassStatusDto,
} from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  // Datos en duro para horarios
  private readonly schedules: Map<string, ScheduleDto[]> = new Map([
    [
      '1',
      [
        {
          day: 'Lunes',
          subjects: [
            {
              id: '1',
              name: 'Cálculo Diferencial',
              initial_time: '08:00',
              end_time: '10:00',
              category: 'Matemáticas',
            },
            {
              id: '2',
              name: 'Programación',
              initial_time: '10:00',
              end_time: '12:00',
              category: 'Computación',
            },
          ],
        },
        {
          day: 'Martes',
          subjects: [
            {
              id: '3',
              name: 'Física',
              initial_time: '08:00',
              end_time: '10:00',
              category: 'Ciencias',
            },
          ],
        },
      ],
    ],
  ]);

  // Datos en duro para detalles de materias
  private readonly subjectDetails: Map<string, SubjectDetailDto> = new Map([
    [
      '1',
      {
        subject_id: '1',
        subject_name: 'Cálculo Diferencial',
        initial_time: '08:00',
        end_time: '10:00',
        category: 'Matemáticas',
        summary: {
          total_classes: 40,
          absent: 3,
          present: 37,
        },
      },
    ],
    [
      '2',
      {
        subject_id: '2',
        subject_name: 'Programación',
        initial_time: '10:00',
        end_time: '12:00',
        category: 'Computación',
        summary: {
          total_classes: 38,
          absent: 2,
          present: 36,
        },
      },
    ],
  ]);

  // Datos en duro para clases de hoy
  private readonly todayClasses: Map<string, SubjectDto[]> = new Map([
    [
      '1',
      [
        {
          id: '1',
          name: 'Cálculo Diferencial',
          initial_time: '08:00',
          end_time: '10:00',
          category: 'Matemáticas',
        },
        {
          id: '2',
          name: 'Programación',
          initial_time: '10:00',
          end_time: '12:00',
          category: 'Computación',
        },
      ],
    ],
  ]);

  findScheduleByStudentId(studentId: string): ScheduleDto[] {
    const schedule = this.schedules.get(studentId);

    if (!schedule) {
      throw new NotFoundException(
        `Horario del estudiante ${studentId} no encontrado`,
      );
    }

    return schedule;
  }

  findSubjectDetail(studentId: string, subjectId: string): SubjectDetailDto {
    const subject = this.subjectDetails.get(subjectId);

    if (!subject) {
      throw new NotFoundException(`Materia ${subjectId} no encontrada`);
    }

    return subject;
  }

  findTodayClasses(studentId: string): TodayScheduleDto {
    const classes = this.todayClasses.get(studentId) || [];
    const today = new Date().toISOString().split('T')[0];

    return {
      today_date: today,
      classes,
    };
  }

  findClassStatus(studentId: string, classId: string): ClassStatusDto {
    // Buscar la clase en las clases de hoy
    const classes = this.todayClasses.get(studentId) || [];
    const classInfo = classes.find((c) => c.id === classId);

    if (!classInfo) {
      throw new NotFoundException(`Clase ${classId} no encontrada`);
    }

    // Calcular tiempo restante (simulado)
    return {
      id: classInfo.id,
      name: classInfo.name,
      initial_time: classInfo.initial_time,
      end_time: classInfo.end_time,
      remaining_time: '45 minutos',
      status: 'upcoming',
    };
  }
}
