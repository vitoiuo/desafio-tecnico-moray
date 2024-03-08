# Desafio técnico Moray

- [Desafio técnico Moray](#desafio-técnico-moray)
  - [Demo](#demo)
  - [Setup Inicial](#setup-inicial)
  - [Bibliotecas utilizadas](#bibliotecas-utilizadas)

Interface web para exibir os dados de uma população. A interface exibe os bairros em um mapa e, para cada bairro, a evolução populacional e a taxa de mudança relacionada a esse evolução numa matriz temporal.

## Demo

![Demonstração da aplicação](./public/demo.gif)

## Setup inicial

Instalar as dependências do projeto
```bash
npm install
```

Rodar o projeto localmente
```bash
npm run dev
```

Rodar os testes
```bash
npm run test
```

## Bibliotecas utilizadas

- [React](https://react.dev/): Framework javascript para construção da interface
- [Vite](https://vitejs.dev/): Servidor de desenvolvimento local
- [Vitest](https://vitest.dev/): Runnner de testes construído sobre o vite
- [Material UI](https://mui.com/): Biblioteca de componentes
- [Msw](https://mswjs.io/): Biblioteca para criação de APIs mock
- [Recharts](https://recharts.org/en-US/): Biblioteca para a criação de gráficos
- [React Leaflet](https://react-leaflet.js.org/): Biblioteca par uso de mapas