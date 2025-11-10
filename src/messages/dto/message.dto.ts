export class ChatDto {
  id: string;
  name: string;
  rol: string;
  image: string;
}

export class ChatsResponseDto {
  chats: ChatDto[];
}

export class MessageDto {
  id: string;
  title: string;
  description: string;
  date: string;
}

export class MessagesResponseDto {
  messages: MessageDto[];
}
