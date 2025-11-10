import { Controller, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import {
  ScheduleDto,
  SubjectDetailDto,
  TodayScheduleDto,
  ClassStatusDto,
} from './dto/schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get(':student_id')
  getSchedule(@Param('student_id') studentId: string): ScheduleDto[] {
    return this.scheduleService.findScheduleByStudentId(studentId);
  }

  @Get(':student_id/:subject_id')
  getSubjectDetail(
    @Param('student_id') studentId: string,
    @Param('subject_id') subjectId: string,
  ): SubjectDetailDto {
    return this.scheduleService.findSubjectDetail(studentId, subjectId);
  }

  @Get('today/:student_id')
  getTodayClasses(@Param('student_id') studentId: string): TodayScheduleDto {
    return this.scheduleService.findTodayClasses(studentId);
  }

  @Get('today/:student_id/:class_id')
  getClassStatus(
    @Param('student_id') studentId: string,
    @Param('class_id') classId: string,
  ): ClassStatusDto {
    return this.scheduleService.findClassStatus(studentId, classId);
  }
}
