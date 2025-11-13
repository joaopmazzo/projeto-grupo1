import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsString({ message: 'Username deve ser um texto' })
  @IsNotEmpty({ message: 'Username não deve ser vazio' })
  username: string;

  @IsString({ message: 'Password deve ser um texto' })
  @IsNotEmpty({ message: 'Password não deve ser vazio' })
  password: string;
}
