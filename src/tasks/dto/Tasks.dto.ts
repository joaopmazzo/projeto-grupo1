import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString({ message: 'Titulo deve ser um texto' })
  @IsNotEmpty({ message: 'Titulo não deve ser vazio' })
  titulo: string;

  @IsString({ message: 'Descrição deve ser um texto' })
  @IsOptional()
  descricao?: string;
}

export class UpdateTaskDTO {
  @IsString({ message: 'Titulo deve ser um texto' })
  @IsNotEmpty({ message: 'Titulo não deve ser vazio' })
  @IsOptional()
  titulo?: string;

  @IsString({ message: 'Descrição deve ser um texto' })
  @IsOptional()
  descricao?: string;

  @IsBoolean({ message: 'Concluída deve ser verdadeiro ou falso' })
  @IsOptional()
  concluida?: boolean;
}
