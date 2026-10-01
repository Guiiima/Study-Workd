# Study Project

Plataforma inteligente de aprendizagem baseada em **repetição espaçada**, criada para organizar conteúdos de estudo e ajudar o usuário a revisar cada assunto no momento adequado.

O MVP terá como foco principal o uso de **flashcards**, mas a arquitetura do projeto será preparada para evoluir futuramente para geração de conteúdo com IA, simulados, resumos, importação de documentos e outros formatos de aprendizagem.

## Objetivo

A principal hipótese do produto é:

> O aplicativo consegue organizar conteúdos e fazer o usuário aprender de forma mais eficiente do que estudar de maneira tradicional.

A proposta não é apenas armazenar flashcards, mas **gerenciar o processo de aprendizagem**.

O sistema deverá ser capaz de identificar:

- o que precisa ser estudado hoje;
- quais conteúdos estão sendo esquecidos;
- quais assuntos apresentam maior dificuldade;
- quais conteúdos já estão sendo dominados;
- quando cada conteúdo deve ser revisado novamente.

---

# Fluxo principal

```text
Criar Grupo
    │
    ▼
Criar Deck
    │
    ▼
Criar Flashcards
    │
    ▼
Iniciar Estudo
    │
    ▼
Responder Card
    │
    ▼
Avaliar Dificuldade
    │
    ▼
Repetição Espaçada
    │
    ▼
Estatísticas
```

---

# Conceitos principais

## Grupos

Representam grandes áreas de conhecimento.

Exemplos:

- Faculdade
- Concurso
- Inglês
- Programação
- Certificações

Um grupo pode possuir diversos decks.

```text
Programação
├── JavaScript
├── Angular
├── Node.js
└── Banco de Dados
```

---

## Decks

Representam divisões lógicas dentro de um grupo.

Exemplo:

```text
Grupo: Inteligência Artificial

├── Redes Neurais
├── Machine Learning
├── Transformers
└── Visão Computacional
```

Outro exemplo:

```text
Grupo: Direito

├── Constitucional
├── Penal
└── Administrativo
```

---

## Flashcards

Cada deck é composto por flashcards.

Um card poderá conter:

- Pergunta
- Resposta
- Explicação opcional
- Tags
- Data de criação
- Histórico de revisões

Exemplo:

**Pergunta**

> O que é Backpropagation?

**Resposta**

> Algoritmo utilizado para calcular os gradientes de uma rede neural durante o treinamento.

---

# Tags

Os flashcards poderão possuir múltiplas tags.

Exemplo:

```text
#Automatos
#Aula05
#Prova1
#Importante
```

As tags permitirão criar sessões de estudo específicas e realizar buscas e filtros posteriormente.

---

# Sistema de estudo

O estudo será organizado através de sessões.

Ao iniciar uma sessão, o usuário poderá escolher entre:

- estudar um grupo inteiro;
- estudar apenas um deck;
- filtrar cards por tags;
- estudar cards pendentes;
- estudar cards difíceis;
- iniciar automaticamente uma sessão através de **Estudar Agora**.

No modo **Estudar Agora**, o próprio sistema será responsável por selecionar os cards mais relevantes para revisão naquele momento.

---

# Ciclo de revisão

Durante uma sessão:

```text
Visualizar pergunta
       │
       ▼
Tentar responder
       │
       ▼
Revelar resposta
       │
       ▼
Avaliar dificuldade
       │
       ▼
Calcular próxima revisão
```

O usuário poderá avaliar a resposta como:

- 😄 Fácil
- 🙂 Bom
- 😐 Difícil
- 😵 Não lembrei

Essas avaliações serão utilizadas pelo algoritmo de repetição espaçada.

---

# Repetição espaçada

Cada flashcard possuirá seu próprio histórico de aprendizagem.

O sistema poderá armazenar informações como:

- quantidade de revisões;
- última revisão;
- próxima revisão;
- dificuldade estimada;
- estabilidade da memória;
- histórico de respostas.

Exemplo de evolução:

```text
Hoje
 │
 ▼
Difícil
 │
 ▼
1 dia
 │
 ▼
Bom
 │
 ▼
4 dias
 │
 ▼
Fácil
 │
 ▼
12 dias
 │
 ▼
Fácil
 │
 ▼
35 dias
```

A arquitetura permitirá utilizar algoritmos modernos de repetição espaçada, como **FSRS**, para calcular os intervalos de revisão.

---

# Dashboard

O dashboard deverá apresentar somente as informações necessárias para o usuário decidir rapidamente o que estudar.

Exemplo:

```text
Bom dia!

24 revisões pendentes
8 novos cards

Tempo estimado:
18 minutos

[ Estudar Agora ]
```

Também serão exibidos os grupos do usuário.

```text
📚 Faculdade
💻 Programação
🇺🇸 Inglês
📖 Concurso
```

---

# Estatísticas

O sistema deverá acompanhar indicadores como:

- dias consecutivos estudando;
- tempo total estudado;
- quantidade de cards revisados;
- cards aprendidos;
- taxa de retenção;
- cards difíceis;
- cards esquecidos;
- progresso por grupo;
- progresso por deck.

---

# Busca

O usuário poderá pesquisar conteúdos em toda a plataforma.

Exemplo:

```text
Buscar: Backpropagation
```

O sistema deverá localizar todos os cards relacionados ao conteúdo pesquisado.

---

# Funcionalidades do MVP

## Gerenciamento

- Cadastro e login
- Criar grupos
- Criar decks
- Criar flashcards
- Editar flashcards
- Excluir flashcards

## Organização

- Tags
- Busca
- Filtros
- Contagem de cards
- Histórico de revisões

## Estudo

- Sessões de estudo
- Revelar respostas
- Avaliação de dificuldade
- Repetição espaçada
- Revisões automáticas

## Acompanhamento

- Dashboard
- Estatísticas
- Progresso por grupo
- Progresso por deck
- Sequência diária de estudos (streak)

---

# Arquitetura Front-end

O front-end utiliza Angular com uma arquitetura organizada por **features**.

```text
src/app/
│
├── core/
│   ├── auth/
│   ├── guards/
│   ├── interceptors/
│   ├── http/
│   └── config/
│
├── shared/
│   ├── ui/
│   │   ├── button/
│   │   ├── modal/
│   │   ├── input/
│   │   ├── badge/
│   │   ├── empty-state/
│   │   └── loading/
│   │
│   ├── pipes/
│   ├── directives/
│   └── utils/
│
├── features/
│   ├── dashboard/
│   ├── groups/
│   ├── decks/
│   ├── flashcards/
│   ├── study/
│   ├── statistics/
│   ├── tags/
│   └── search/
│
├── layout/
│   ├── app-shell/
│   ├── sidebar/
│   └── header/
│
├── app.routes.ts
├── app.config.ts
└── app.component.ts
```

---

# Organização da arquitetura

## `core`

Contém recursos globais utilizados pela aplicação.

Exemplos:

```text
core/
├── auth/
├── guards/
├── interceptors/
├── http/
└── config/
```

Aqui ficam recursos como:

- autenticação;
- guards;
- interceptadores HTTP;
- configuração da aplicação;
- infraestrutura global.

---

## `shared`

Contém recursos reutilizáveis entre diferentes funcionalidades.

```text
shared/
├── ui/
├── pipes/
├── directives/
└── utils/
```

### `shared/ui`

Componentes visuais genéricos que não pertencem a uma feature específica.

Exemplos:

```text
button/
modal/
input/
badge/
empty-state/
loading/
```

Um componente só deve entrar em `shared` quando realmente puder ser utilizado por diferentes partes da aplicação.

---

## `features`

Cada funcionalidade principal possui sua própria área.

Exemplo:

```text
features/groups/
├── pages/
├── components/
├── data-access/
├── models/
└── groups.routes.ts
```

### `pages`

Componentes associados diretamente às rotas da aplicação.

Exemplo:

```text
groups-page/
group-detail-page/
group-create-page/
```

### `components`

Componentes específicos da funcionalidade.

Exemplo:

```text
group-card/
group-form/
```

### `data-access`

Responsável pelo acesso a dados e gerenciamento de estado.

Pode conter:

```text
groups.service.ts
groups.store.ts
```

Aqui ficam:

- chamadas à API;
- services;
- stores;
- gerenciamento de estado da feature.

### `models`

Interfaces e tipos relacionados à funcionalidade.

Exemplo:

```text
group.model.ts
```

### `domain`

Utilizado quando uma feature possui regras próprias de domínio.

Exemplo:

```text
study/domain/
├── review-rating.ts
└── study-session.ts
```

Esse código deve possuir o mínimo possível de dependência da interface visual.

---

# Layout

Componentes responsáveis pela estrutura geral da aplicação ficam em:

```text
layout/
├── app-shell/
├── sidebar/
└── header/
```

Esses componentes definem a estrutura visual que envolve as páginas da aplicação.

---

# Roteamento

Cada feature poderá possuir seu próprio arquivo de rotas.

Exemplo:

```text
dashboard.routes.ts
groups.routes.ts
decks.routes.ts
flashcards.routes.ts
study.routes.ts
statistics.routes.ts
```

O arquivo:

```text
app.routes.ts
```

fica responsável por conectar as rotas principais da aplicação.

Sempre que possível, as features deverão utilizar **lazy loading**.

---

# Estratégia de Git

A branch principal do projeto deve permanecer estável.

```text
main
```

O desenvolvimento deve acontecer em branches específicas.

## Tipos de branches

### Feature

Utilizada para novas funcionalidades.

```text
feature/groups
feature/decks
feature/flashcards
feature/study-session
feature/dashboard
```

### Fix

Utilizada para correções.

```text
fix/login-redirect
fix/study-progress
```

### Refactor

Utilizada para alterações estruturais que não adicionam novas funcionalidades.

```text
refactor/study-store
refactor/groups-service
```

### Chore

Utilizada para tarefas de infraestrutura, configuração ou organização do projeto.

```text
chore/project-architecture
chore/configure-eslint
chore/update-dependencies
```

---

# Fluxo de desenvolvimento

Uma nova branch deve normalmente ser criada a partir da `main`.

```text
main
 │
 ├── feature/groups
 │
 ├── feature/decks
 │
 ├── feature/study
 │
 ├── fix/login
 │
 └── chore/project-architecture
```

Exemplo:

```bash
git switch main
git pull
git switch -c feature/groups
```

Após concluir a implementação:

```bash
git add .
git commit -m "feat: implement group creation"
```

A branch poderá então ser integrada à `main` através de Pull Request ou merge.

---

# Padrão de commits

O projeto utiliza mensagens inspiradas em **Conventional Commits**.

### Nova funcionalidade

```text
feat: implement group creation
```

### Correção

```text
fix: correct study progress calculation
```

### Refatoração

```text
refactor: simplify study store
```

### Configuração ou organização

```text
chore: create initial project architecture
```

### Documentação

```text
docs: update project documentation
```

---

# Estrutura preparada para evolução

Embora o MVP inicialmente trabalhe com flashcards criados manualmente, a modelagem deverá considerar que conteúdos poderão futuramente possuir diferentes fontes.

Exemplos:

```text
PDF
Vídeo
Página Web
Texto
Áudio
Imagem
```

Isso permitirá introduzir novas funcionalidades sem exigir uma grande remodelagem da aplicação.

---

# Roadmap

## Inteligência Artificial

- Geração automática de flashcards
- Geração de quizzes
- Resumos inteligentes
- Glossários
- Explicações adicionais

## Importação de conteúdo

- PDF
- DOCX
- Markdown
- URLs
- YouTube
- OCR de imagens
- Áudio de aulas

## Novos tipos de estudo

- Questões de múltipla escolha
- Verdadeiro ou falso
- Completar lacunas
- Associação de conceitos
- Questões discursivas

## Gamificação

- Conquistas
- Níveis
- Sequências
- Metas semanais
- Ranking entre amigos

## Compartilhamento

- Decks públicos
- Compartilhamento por link
- Biblioteca comunitária
- Colaboração em grupos

## Inteligência do sistema

- Sugestão automática do que estudar
- Identificação de assuntos com maior dificuldade
- Recomendação de revisões
- Mapa de conhecimento
- Estimativa de retenção por assunto

---

# Visão de longo prazo

A evolução do produto deverá permitir transformar diferentes fontes de conhecimento em materiais estruturados de aprendizagem.

```text
PDF
 │
Vídeo
 │
Texto
 │
Imagem
 │
Áudio
 │
 ▼
Processamento
 │
 ▼
Conteúdo de estudo
 │
 ├── Flashcards
 ├── Resumos
 ├── Questões
 └── Glossários
 │
 ▼
Repetição Espaçada
 │
 ▼
Aprendizado personalizado
```

O objetivo final é que a plataforma não seja apenas um gerenciador de flashcards, mas um **sistema de gerenciamento do aprendizado contínuo**.