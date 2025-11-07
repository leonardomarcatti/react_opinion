# Usa a imagem oficial do Node 24
FROM node:24

# Define o diretório de trabalho
WORKDIR /app

# Instala npm mais recente e pnpm globalmente
RUN npm install -g npm pnpm concurrently

# Copia apenas os manifests primeiro (para melhor cache)
COPY backend/package.json backend/pnpm-lock.yaml* ./backend/
COPY frontend/package.json frontend/pnpm-lock.yaml* ./frontend/

# Instala dependências do backend
WORKDIR /app/backend
RUN pnpm install

# Instala dependências do frontend
WORKDIR /app/frontend
RUN pnpm install

# Copia o restante do código
WORKDIR /app
COPY . .

# Expõe as portas do frontend e backend
EXPOSE 3000 3001

# Usa concurrently para rodar frontend e backend juntos
# O parâmetro --host 0.0.0.0 é FUNDAMENTAL para o Vite ser acessível fora do container
CMD ["concurrently", "-n", "frontend,backend", "-c", "green,blue", "pnpm --filter ./frontend run dev", "pnpm --filter ./backend run start"]
