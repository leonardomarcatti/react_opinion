<h1>💬 OpinionHub — Sistema de Opiniões com React 19 + ContextAPI</h1>
<p> Um sistema web moderno desenvolvido em **React 19** que permite aos usuários compartilhar e visualizar **opiniões** sobre qualquer tema.  
O projeto utiliza **Context API** para gerenciamento global de estado e roda em **container Docker** para garantir portabilidade e fácil deploy.  
Gerenciado com **pnpm**, garantindo desempenho e consistência nas dependências.</p>

---
<h2>🚀 Tecnologias</h2>
<p>Este projeto foi construído com as seguintes tecnologias:</p>

<ul>
   <li>⚛️ **React 19** — Biblioteca principal para a interface</li>
   <li>🧠 **Context API** — Gerenciamento global de estado</li>
   <li>🐳 **Docker** — Containerização da aplicação</li>
   <li>📦 **pnpm** — Gerenciador de pacotes leve e rápido</li>
   <li>💅 **TailwindCSS** *(opcional, se usado)* — Estilização moderna e responsiva</li>
   <li>🌐 **Vite** — Build e ambiente de desenvolvimento ultra-rápido</li>
   <li>🧩 **React Hooks** — Controle de estado e efeitos colaterais</li>
   <li>🧹 **ESLint + Prettier** — Padronização e qualidade do código</li> 
</ul>

---
<h2>🧰 Funcionalidades</h2>
<ul>
   <li>✍️ Criar e enviar opiniões (comentários, reviews, sugestões, etc.)</li>
   <li>🔐 Persistência local (armazenamento no navegador)</li>
   <li>🌙 Suporte a tema claro/escuro *(opcional)*</li>
   <li>🧠 Estado global via Context API (sem Redux)</li>
   <li>🗑️ Excluir opiniões (com confirmação)</li>
   <li>📋 Listar opiniões existentes em tempo real</li>
</ul>

---
<h2>🏗️ Estrutura do Projeto</h2>

<p>src/</p>
<p>├── components/ # Componentes reutilizáveis (Botões, Cards, etc.)</p>
<p>├── store/ # Contextos globais e Providers</p>
<p>├── App.jsx # Componente raiz</p>
<p>├── main.jsx # Ponto de entrada da aplicação</p>
<p>└── index.css/ # Estilos globais </p>

<h2>⚙️ Instalação e Execução</h2>
<h3>1️⃣ Clonar o repositório</h3>
<p>git clone https://github.com/leonardomarcatti/react_opinion.git</p>

<h3>2️⃣ Build da imagem</h3>
<p>docker build -t opinion-hub .</p>

<h3>3️⃣ Rodar o container</h3>
<p>docker run -d -p 3000:3000 opinion-hub</p>

<h3>Acesse o app no navegador:</h3>
<p><b>👉 http://ip:3000</b></p>



