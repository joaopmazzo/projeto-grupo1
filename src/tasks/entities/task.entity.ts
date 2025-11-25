export class TaskEntity {
  id: number;
  titulo: string;
  descricao?: string;
  concluida: boolean;
  usuarioId: number;
  createdAt: Date;
  updatedAt: Date;
}
