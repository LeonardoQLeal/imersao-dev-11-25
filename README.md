# Base de Conhecimento de Tecnologias (Tech Knowledge Base)

![Demonstração da Interface](https://img.shields.io/badge/Interface-Web-blue)
![Tecnologia](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Tecnologia](https://img.shields.io/badge/Node.js-Scripting-green)
![API](https://img.shields.io/badge/API-Gemini-orange)

Neste meu primeiro projeto, tive a oportunidade juntamente com a Alura de criar uma aplicação web interativa que funciona como uma "Base de Conhecimento" para tecnologias de desenvolvimento de software. A interface permite aos usuários visualizar e pesquisar dinamicamente uma lista de ferramentas, linguagens e frameworks, exibindo informações relevantes sobre cada um.

O grande diferencial deste projeto é o seu **gerador de conteúdo automatizado**, um script Node.js que utiliza a **API do Google Gemini** para popular e expandir a base de dados de forma inteligente, garantindo que o conteúdo seja sempre rico e atualizado.

## ✨ Funcionalidades Principais

### Interface do Usuário (Frontend)
*   **Visualização em Cards:** As tecnologias são apresentadas em um layout de cards limpo e organizado.
*   **Busca Dinâmica:** Um campo de busca permite filtrar os cards em tempo real, pesquisando por nome ou descrição da tecnologia.
*   **Responsividade (Conceito):** A estrutura é baseada em HTML semântico e CSS, pronta para ser adaptada para diferentes tamanhos de tela.
*   **Links Externos:** Cada card contém um link "Saiba mais" que direciona para a página oficial da tecnologia.

### Gerador de Conteúdo (Backend/Script)
*   **Automação com IA:** Utiliza um script Node.js para se conectar à API do Google Gemini.
*   **Geração Estruturada:** O script instrui a IA a gerar dados em um formato JSON específico, incluindo nome, descrição, ano de criação, link e tags.
*   **Expansão Inteligente:** O gerador lê a base de dados existente para evitar a duplicação de conteúdo, solicitando à IA que crie apenas novas entradas.
*   **Resiliência:** O script possui um mecanismo de retentativas (`retries`) com `delay` exponencial para lidar com possíveis falhas na comunicação com a API.

## 🚀 Tecnologias Utilizadas

*   **Frontend:**
    *   **HTML5:** Para a estrutura semântica da página.
    *   **CSS3:** (Implícito) Para a estilização dos componentes.
    *   **JavaScript (ES6+):** Para a manipulação do DOM, interatividade, e consumo de dados (`fetch API`).

*   **Backend (Script de Geração):**
    *   **Node.js:** Ambiente de execução para o script de automação.
    *   **Google Gemini API:** Para a geração de conteúdo de forma programática.
    *   **dotenv:** Para o gerenciamento seguro de chaves de API através de variáveis de ambiente.


## 🎯 Objetivos e Aprendizados

Este projeto foi desenvolvido como parte da Imersão Dev da Alura, com o objetivo de consolidar conhecimentos em desenvolvimento web e explorar a integração com APIs de Inteligência Artificial. Os principais aprendizados incluem:

*   Manipulação do DOM com JavaScript puro para criar interfaces dinâmicas.
*   Uso da `Fetch API` para carregar dados de forma assíncrona.
*   Implementação de funcionalidades de busca e filtro no frontend.
*   Criação de scripts de automação com Node.js.
*   Integração com uma API externa (Google Gemini) para geração de conteúdo.
*   Gerenciamento de chaves de API e configurações de ambiente com `.env`.
