import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':student_id')
  getProfile(@Param('student_id') studentId: string): ProfileDto {
    return this.profileService.findByStudentId(studentId);
  }
}
