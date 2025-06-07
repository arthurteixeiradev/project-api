import { PrismaClient } from '@prisma/client';

// Declara uma variável global para o cliente Prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// Instancia o PrismaClient, reutilizando a instância existente em ambiente de desenvolvimento
// para evitar múltiplas conexões durante o hot-reload.
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// O PrismaClient já gerencia a abertura e o fechamento de conexões.
// Você não precisa de métodos explícitos como connect() ou disconnect() para cada query.
// A primeira query que você executa abrirá a conexão (lazy connect),
// e o Prisma a manterá para otimizar o desempenho.
