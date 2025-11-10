import { Controller, Get, Param } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsResponseDto } from './dto/announcement.dto';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Get(':student_id')
  getAnnouncements(
    @Param('student_id') studentId: string,
  ): AnnouncementsResponseDto {
    const announcements = this.announcementsService.findByStudentId(studentId);
    return { announcements };
  }
}
