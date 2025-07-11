# Nemu Challenge Back-End

## Descrição

Este projeto é uma API back-end desenvolvida em Node.js e TypeScript, responsável por processar e servir dados de jornadas a partir de um arquivo Excel.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express

## Estrutura do Projeto

```
src/
  data/           # Arquivos de dados (ex: data.xlsx)
  routes/         # Rotas da API
  services/       # Lógica de processamento dos dados do .xlsx
  types/          # Tipos TypeScript
  utils/          # Utilitários (ex: leitura de Excel)
```

## Como rodar localmente

1. Clone o repositório utilizando alguma das alternativas abaixo:

- HTTPS:

```bash
https://github.com/birobirobiro/nemu-challenge-back-end.git
```

- SSH:

```bash
git@github.com:birobirobiro/nemu-challenge-back-end.git
```

- GitHub CLI:

```bash
gh repo clone birobirobiro/nemu-challenge-back-end
```

2. Acesse a pasta do projeto:

```bash
cd nemu-challenge-back-end
```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Faça uma cópia do arquivo `.env.example` localizado na raíz do projeto e renomeie-o para `.env`

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

5. Acesse o repositório [nemu-challenge-front-end](https://github.com/birobirobiro/nemu-challenge-front-end) e siga as instruções descritas no README para que a comunicação ocorra corretamente entre o front-end e back-end.
