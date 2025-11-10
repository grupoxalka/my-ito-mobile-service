import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { ChatsResponseDto, MessagesResponseDto } from './dto/message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':student_id')
  getChats(@Param('student_id') studentId: string): ChatsResponseDto {
    const chats = this.messagesService.findChatsByStudentId(studentId);
    return { chats };
  }

  @Get(':student_id/:chat_id')
  getMessages(
    @Param('student_id') studentId: string,
    @Param('chat_id') chatId: string,
  ): MessagesResponseDto {
    const messages = this.messagesService.findMessagesByChatId(
      studentId,
      chatId,
    );
    return { messages };
  }
}
