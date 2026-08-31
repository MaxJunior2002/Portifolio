# 💼 Portfólio Profissional

> Projeto desenvolvido para apresentar experiências, projetos, competências e canais de contato de forma moderna, responsiva e profissional.

---

## 🌐 Site publicado

Acesse o projeto em produção:

https://portifolio-8n8b.onrender.com/

---

## 📌 Sobre o projeto

Este portfólio foi pensado como uma vitrine pessoal para destacar projetos desenvolvidos, experiências profissionais e formas de contato. A aplicação combina um frontend moderno com um backend para envio de mensagens via formulário, integrado ao EmailJS.

---

## 🧩 Tecnologias utilizadas

### Frontend
- [React](https://react.dev/) - Biblioteca para construção de interfaces reativas.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança e produtividade.
- [Vite](https://vitejs.dev/) - Ferramenta de build e desenvolvimento rápido.
- [Material UI](https://mui.com/) - Componentes visuais e design system.

### Backend
- [Java 17](https://www.oracle.com/java/) - Linguagem principal do backend.
- [Spring Boot](https://spring.io/projects/spring-boot) - Framework para criação da API REST.
- [Maven](https://maven.apache.org/) - Gerenciamento de dependências e build.

### Serviços e integrações
- [EmailJS](https://www.emailjs.com/) - Envio de mensagens do formulário de contato sem expor chaves sensíveis no frontend.
- [Render](https://render.com/) - Hospedagem do backend e do frontend em produção.

---

## 🛠️ Estrutura do repositório

- `meu-portifolio/` - aplicação frontend em React + Vite
- `backend/` - API REST em Java + Spring Boot
- `docker-compose.yml` - orquestração local dos serviços
- `render.yaml` - configuração de deploy na Render
- `wireframe/` - protótipos visuais do projeto

---

## ▶️ Instruções de uso e desenvolvimento

### 1. Clonar o repositório

```bash
git clone https://github.com/MaxJunior2002/Portifolio.git
cd Portifolio
```

### 2. Executar o frontend localmente

```bash
cd meu-portifolio
npm install
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:5173
```

### 3. Executar o backend localmente

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

O backend ficará disponível em:

```bash
http://localhost:8081
```

### 4. Executar com Docker

Na raiz do projeto:

```bash
docker compose up --build
```

Isso sobe o backend e o frontend em containers, respeitando a configuração local do projeto.

### 5. Build de produção

#### Frontend

```bash
cd meu-portifolio
npm run build
```

#### Backend

```bash
cd backend
mvn package
```

---

## 📬 Funcionalidades principais

- Landing page profissional com apresentação pessoal
- Seções de sobre, projetos, experiências e contato
- Formulário de contato funcional com integração ao EmailJS
- Design responsivo para desktop e mobile
- Deploy publicado em ambiente de produção

---
