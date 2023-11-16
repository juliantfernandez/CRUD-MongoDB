import { IsEnum, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { TodoStatus } from '../schemas/todo.schema';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
