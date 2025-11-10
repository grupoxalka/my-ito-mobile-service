export class AnnouncementDto {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export class AnnouncementsResponseDto {
  announcements: AnnouncementDto[];
}
