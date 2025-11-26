import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString({ message: 'Titulo deve ser um texto' })
  @IsNotEmpty({ message: 'Titulo não deve ser vazio' })
  titulo: string;

  @IsString({ message: 'Descrição deve ser um texto' })
  descricao?: string;
}
