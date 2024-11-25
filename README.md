# Gerenciador de Conexão com Banco de Dados MySQL com NodeJs ![Icone NodeJs](https://github.com/user-attachments/assets/2a7f510a-588b-425e-be1a-34ce86350493)



Este projeto é um módulo Node.js que realiza a conexão com um banco de dados MySQL e executa consultas de forma assíncrona. Ele utiliza a biblioteca `mysql2/promise` para garantir operações rápidas e eficazes. O objetivo principal é gerenciar conexões de forma eficiente, permitindo consultas reutilizáveis, como listar dados da tabela `pessoas`.

---

### Fazendo Conexão com o banco de dados 

![codeBd](https://github.com/user-attachments/assets/e18f8893-3e39-4b28-b22a-203302091625)

---

### Mostrando Dados da Tabela **pessoas**

![codeIndex](https://github.com/user-attachments/assets/2a77f830-3d45-429e-8962-e67beda78059)

---

### Dados no NodeJs

![select](https://github.com/user-attachments/assets/8d2f0d87-6301-48cd-a454-a4b121b95794)

---

## Funcionalidades

- **Gerenciamento de Conexão**:
  - Reutiliza conexões ativas para evitar a criação desnecessária de novas conexões.
  - Implementado com suporte a variáveis globais.

- **Consulta ao Banco de Dados**:
  - Realiza uma consulta SQL para buscar todos os registros da tabela `pessoas`.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **mysql2/promise**: Biblioteca para conexão e consultas ao MySQL de forma assíncrona.

---

## Como Usar

### Pré-requisitos
- Node.js instalado em sua máquina.
- Um banco de dados MySQL configurado com a tabela `pessoas`.

### Estrutura da Tabela
Certifique-se de que sua tabela `pessoas` está configurada no banco de dados `mybanc` com a seguinte estrutura:

```sql
CREATE DATABASE mybanc;

USE mybanc;

CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    salario DECIMAL(10, 2),
    data_nascimento DATE
);
