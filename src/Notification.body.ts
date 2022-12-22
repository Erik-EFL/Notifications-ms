import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() // => responsável por informar que o campo não pode ser vazio
  @IsUUID() // => responsável por informar que o campo deve ser um UUID
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsNotEmpty()
  category: string;
}
