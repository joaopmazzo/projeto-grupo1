import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsString({ message: 'Email deve ser um texto' })
  @IsNotEmpty({ message: 'Email não deve ser vazio' })
  email: string;

  @IsString({ message: 'Senha deve ser um texto' })
  @IsNotEmpty({ message: 'Senha não deve ser vazio' })
  senha: string;
}
