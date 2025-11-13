import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsString({ message: 'Email deve ser um texto' })
  @IsNotEmpty({ message: 'Email não deve ser vazio' })
  email: string;

  @IsString({ message: 'Password deve ser um texto' })
  @IsNotEmpty({ message: 'Password não deve ser vazio' })
  password: string;
}
