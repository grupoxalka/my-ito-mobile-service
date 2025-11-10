import { Injectable } from '@nestjs/common';
import { AnnouncementDto } from './dto/announcement.dto';

@Injectable()
export class AnnouncementsService {
  // Datos en duro (mock data)
  private readonly announcements: AnnouncementDto[] = [
    {
      id: '1',
      image: 'https://example.com/images/announcement1.jpg',
      title: 'Inicio de inscripciones',
      description:
        'Las inscripciones para el próximo semestre comienzan el 15 de noviembre',
      date: '2025-11-15',
    },
    {
      id: '2',
      image: 'https://example.com/images/announcement2.jpg',
      title: 'Evento Cultural',
      description: 'Gran evento cultural en el auditorio principal',
      date: '2025-11-20',
    },
    {
      id: '3',
      image: 'https://example.com/images/announcement3.jpg',
      title: 'Exámenes Finales',
      description: 'Calendario de exámenes finales disponible',
      date: '2025-12-01',
    },
  ];

  findByStudentId(studentId: string): AnnouncementDto[] {
    // In a real application, you would filter by studentId.
    // For now, we return all announcements, ignoring the studentId.
    void studentId;
    return this.announcements;
  }
}
