# **Biblioteca de Recursos de Aprendizado com Assistente Inteligente**

## **Descrição**

Este projeto é a base para a **Biblioteca de Recursos de Aprendizado com Assistente Inteligente**, uma plataforma que oferece um assistente virtual integrado para suporte ao aprendizado. O objetivo é ajudar alunos a encontrar recursos personalizados, responder perguntas técnicas, e oferecer recomendações de materiais para estudo.

A plataforma é desenvolvida utilizando **Nest.js** como framework backend e outras tecnologias modernas para garantir escalabilidade, eficiência e integração com serviços inteligentes.

---

## **Funcionalidades**

- **Busca Inteligente**: Sugestões automáticas de recursos de aprendizado baseadas no progresso do aluno.
- **FAQs Personalizadas**: Perguntas frequentes respondidas por um modelo de linguagem (LLM).
- **Recomendações de Estudo**: Indicações de novos materiais com base nas interações e histórico do aluno.
- **Explicações Detalhadas**: Processos e conceitos explicados passo a passo, com links diretos para recursos relacionados.

---

## **Tecnologias Utilizadas**

### **Backend**

- **Frameworks**:
  - [Nest.js](https://nestjs.com/) (com base em Express.js)
- **Linguagem**:
  - [TypeScript](https://www.typescriptlang.org/)

### **Pacotes e Bibliotecas**

- **Prisma**: ORM para conexão com o banco de dados e manipulação de dados.
- **Class Validator**: Validação e sanitização de dados nos DTOs.
- **Swagger**: Documentação interativa da API.

### **APIs e Integrações**

- **OpenAI API ou Hugging Face LLMs**: Integração com modelos de linguagem para suporte às funcionalidades inteligentes.
- **Banco de Dados**:
  - MongoDB (ou similar) para armazenar histórico e preferências dos alunos.

---

## **Setup Inicial**

### **Pré-requisitos**

1. Node.js
2. Gerenciador de pacotes: npm
3. Banco de dados configurado (MongoDB)

---

### **Passo a Passo**

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/SalvatoreAcademy/backend-web-intermediario-nestjs-typescript.git
   cd backend-web-intermediario-nestjs-typescript
   ```

2. **Instalar as dependências**

   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto e configure as variáveis:

   ```env
   DATABASE_URL=mongodb://localhost:27017/nome-do-banco
   ```

4. **Inicializar o Prisma**

   ```bash
   npx prisma init
   npx prisma generate
   ```

5. **Rodar o servidor**

   ```bash
   npm run start:dev
   ```

6. **Acessar a documentação Swagger**
   Após rodar o servidor, acesse:
   ```
   http://localhost:3000/api
   ```

---

## **Estrutura do Projeto**

### **Arquitetura Base**

O projeto segue os princípios do framework **Nest.js**, dividindo responsabilidades em módulos, controladores e serviços:

- **Module**: Organização e orquestração dos componentes da aplicação.
- **Controller**: Gerencia as rotas e as requisições recebidas.
- **Service**: Contém a lógica de negócio e interage diretamente com o banco de dados.
- **Model/Domain**:
  - **Entity**: Representação das tabelas ou documentos no banco de dados.
  - **DTO**: Estrutura para validação e transferência de dados.

---

## **Scripts Disponíveis**

- `npm run start`: Inicia a aplicação em modo de produção.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run test`: Executa os testes da aplicação.
- `npm run build`: Gera a build da aplicação.

## **Links Importantes**

- [Repositório do Projeto](https://github.com/SalvatoreAcademy/backend-web-intermediario-nestjs-typescript)
- [Board do Projeto](https://github.com/orgs/SalvatoreAcademy/projects/9/views/1)