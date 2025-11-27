import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaUniqueConstraintFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception.code === 'P2002') {
      const originalCode =
        exception?.meta?.driverAdapterError?.cause?.originalCode;

      if (originalCode === 'SQLITE_CONSTRAINT_UNIQUE') {
        const fields =
          exception?.meta?.driverAdapterError?.cause?.constraint?.fields ?? [];
        const fieldList = Array.isArray(fields)
          ? fields.join(', ')
          : 'campo(s) desconhecido(s)';

        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: `O(s) campo(s) ${fieldList} deve(m) ser único(s).`,
        });

        return;
      }

      response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: 'Violação da restrição de unicidade no banco de dados.',
      });

      return;
    }
  }
}
