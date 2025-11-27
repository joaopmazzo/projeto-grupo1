import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'nome deve ser um texto' })
  @IsNotEmpty({ message: 'nome não deve ser vazio' })
  nome: string;

  @IsString({ message: 'Email deve ser um texto' })
  @IsNotEmpty({ message: 'Email não deve ser vazio' })
  email: string;

  @IsString({ message: 'Senha deve ser um texto' })
  @IsNotEmpty({ message: 'Senha não deve ser vazia' })
  senha: string;
}
