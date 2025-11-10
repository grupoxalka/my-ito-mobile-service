import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  // Datos en duro (mock data)
  private readonly profiles: Map<string, ProfileDto> = new Map([
    [
      '1',
      {
        id: '1',
        name: 'Juan Pérez García',
        career: 'Ingeniería en Sistemas Computacionales',
        semester: '6',
        grade: '9.2',
      },
    ],
    [
      '2',
      {
        id: '2',
        name: 'María López Rodríguez',
        career: 'Ingeniería Industrial',
        semester: '4',
        grade: '8.8',
      },
    ],
  ]);

  findByStudentId(studentId: string): ProfileDto {
    const profile = this.profiles.get(studentId);

    if (!profile) {
      throw new NotFoundException(
        `Perfil del estudiante ${studentId} no encontrado`,
      );
    }

    return profile;
  }
}
