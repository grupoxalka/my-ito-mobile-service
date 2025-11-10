import { Injectable, NotFoundException } from '@nestjs/common';
import { ChatDto, MessageDto } from './dto/message.dto';

@Injectable()
export class MessagesService {
  // Datos en duro para los chats
  private readonly chats: ChatDto[] = [
    {
      id: '1',
      name: 'Dr. Carlos Mendoza',
      rol: 'Profesor de Matemáticas',
      image: 'https://example.com/images/teacher1.jpg',
    },
    {
      id: '2',
      name: 'Ing. Ana Silva',
      rol: 'Tutora Académica',
      image: 'https://example.com/images/teacher2.jpg',
    },
    {
      id: '3',
      name: 'Lic. Roberto Gómez',
      rol: 'Coordinador de Carrera',
      image: 'https://example.com/images/teacher3.jpg',
    },
  ];

  // Datos en duro para los mensajes por chat
  private readonly messagesByChat: Map<string, MessageDto[]> = new Map([
    [
      '1',
      [
        {
          id: '1',
          title: 'Tarea de Cálculo',
          description: 'Por favor revisa los ejercicios del capítulo 5',
          date: '2025-11-08',
        },
        {
          id: '2',
          title: 'Clase cancelada',
          description: 'La clase del viernes está cancelada por reunión',
          date: '2025-11-09',
        },
      ],
    ],
    [
      '2',
      [
        {
          id: '3',
          title: 'Sesión de tutoría',
          description: 'Recordatorio de nuestra sesión el lunes',
          date: '2025-11-07',
        },
      ],
    ],
    [
      '3',
      [
        {
          id: '4',
          title: 'Documentación pendiente',
          description: 'Necesitas entregar tu constancia de estudios',
          date: '2025-11-06',
        },
      ],
    ],
  ]);

  findChatsByStudentId(studentId: string): ChatDto[] {
    // filtrar por student_id
    void studentId;
    return this.chats;
  }

  findMessagesByChatId(studentId: string, chatId: string): MessageDto[] {
    const messages = this.messagesByChat.get(chatId);

    if (!messages) {
      throw new NotFoundException(`Chat ${chatId} no encontrado`);
    }

    return messages;
  }
}
