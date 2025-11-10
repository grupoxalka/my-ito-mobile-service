import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { ProfileModule } from './profile/profile.module';
import { MessagesModule } from './messages/messages.module';
import { ScheduleModule } from './schedule/schedule.module';
import { CreditsModule } from './credits/credits.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [
    UsersModule,
    AnnouncementsModule,
    ProfileModule,
    MessagesModule,
    ScheduleModule,
    CreditsModule,
    GradesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
