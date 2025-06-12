
# Documentação do Projeto: Dashboard Nuxt App

## Instalação

```bash
npm install
```

```bash
npm run dev
```

## 1. Visão Geral

Este projeto é uma aplicação de dashboard moderna e responsiva, construída com **Nuxt 3**. Foi projetado para exibir análises de negócios, como dados de vendas e métricas de transações, e inclui funcionalidades para **gerenciar assinaturas**.

A aplicação possui uma interface **limpa e orientada a dados**, estilizada com **TailwindCSS**, **gráficos interativos com Chart.js**, e uma **arquitetura baseada em componentes**, facilitando a manutenção e reutilização.

---

## 2. Tecnologias Principais


| Biblioteca    | Versão  | Propósito                                                               |
|---------------|---------|-------------------------------------------------------------------------|
| Nuxt          | ^3.17.5 | Framework principal baseado em Vue.js para construção da aplicação      |
| Vue           | ^3.5.16 | Framework JavaScript subjacente                                         |
| TailwindCSS   | ^4.1.8  | Framework CSS utility-first para desenvolvimento rápido de UI          |
| Chart.js      | ^4.4.1  | Biblioteca poderosa para visualizações de dados                        |
| vue-chartjs   | ^5.3.0  | Wrapper do Chart.js para Vue, facilitando a integração                 |
| @nuxt/icon    | ^1.13.0 | Módulo Nuxt para incorporar ícones SVG facilmente (ex: Unicons)        |

---

## 3. Estrutura do Projeto e Arquivos

A estrutura segue o padrão do Nuxt 3, organizada por responsabilidade.

### 3.1. Páginas (`pages`)

#### `pages/index.vue`

**Propósito**: Exibe um resumo dos principais indicadores de desempenho (KPIs).

**Layout**:

- Grid com duas seções:
  - **Esquerda**: Métrica de TPV com gráfico de linha
  - **Direita**: KPIs como Ticket Médio, Qtde. de Transações, Markup

**Funcionalidade**:

- Importação de dados estáticos de `~/data/dashboardData.json`
- Formatação de moeda com `formatCurrency`
- `chartData` computado para o componente `LineChart`
- `chartOptions` personalizados (tooltips, eixos)

**Componentes Utilizados**:

- `LineChart.vue`
- `StatCard.vue`

---

#### `pages/assinaturas/nova.vue`

**Propósito**: Tela para criação de novo plano de assinatura.

**Layout**: Formulário em grid responsivo dentro de um card branco.

**Funcionalidade**:

- Estado gerenciado com `ref` (`formData`)
- Campo de valor com formatação em tempo real (`handleAmountInput` + `nextTick`)
- Controles de frequência, duração e toggle customizado

**Envio de Formulário**:

- Função `submitForm` com estado `isLoading`
- API mock: `https://jsonplaceholder.typicode.com/posts`
- Toast de sucesso com `useToast`
- Redirecionamento via `useRouter`

**Componentes Utilizados**:

- `ToggleSwitch.vue`

---

### 3.2. Componentes (`components`)

#### `LineChart.vue`

**Propósito**: Wrapper para gráfico de linha (Chart.js)

**Tecnologia**:

- Usa `Line` do `vue-chartjs` e módulos do Chart.js

**Props**:

- `chartData`: labels e datasets
- `chartOptions`: opções customizadas

---

#### `Sidebar.vue` (nome inferido)

**Propósito**: Barra lateral de navegação

**Funcionalidade**:

- Retrátil via `isOpen`
- Destaque do link ativo com `useRoute()`
- Layout responsivo (ícones-only quando retraída)

---

#### `StatCard.vue`

**Propósito**: Exibir estatística com comparação mensal

**Props**:

- `title`: Nome da métrica
- `currentValue`: Valor atual
- `previousValue`: Valor anterior
- `percentageChange`: Diferença percentual

**Layout**: Divide informações entre "Mês atual" e "Mês anterior"

---

#### `Toast.vue` (nome inferido)

**Propósito**: Exibir notificações (sucesso/alerta)

**Funcionalidade**:

- Recebe `message` como prop
- Botão de fechar com evento `close`
- Transições suaves

---

### 3.3. Composables (`composables`)

#### `useToast.js`

**Propósito**: Sistema global de toasts

**Padrão de Projeto**: Singleton  
`ref toasts` definido fora da função para compartilhamento global de estado.

**Exportações**:

- `toasts`: Array `readonly` de toasts ativos
- `showToast(message, duration)`: Adiciona toast com timer
- `removeToast(id)`: Remove manualmente o toast

---

## 4. Testes Automatizados

A aplicação conta com **testes automatizados** utilizando o **Vitest**, garantindo a qualidade e confiabilidade das principais funcionalidades.

### 4.1. Framework de Testes

- **Vitest**: Framework de testes rápido e leve, integrado ao Vite.
- **@vue/test-utils**: Utilitário para montar e testar componentes Vue.
- **happy-dom**: Ambiente de DOM simulado para renderização de componentes.

### 4.2. Abordagem de Testes

- **Mocks e Stubs**: Uso de `vi` para mockar dependências como o roteador (`vue-router`) e o sistema de toasts (`useToast`).
- **Testes de Interação**: Verifica se campos de input e eventos são disparados corretamente.
- **Testes de Integração**: Simula envio de formulário, validação de campos e redirecionamento.
- **Simulação de API**: Uso de `vi.fn()` para mockar chamadas HTTP.

### 4.3. Execução dos Testes

Executar todos os testes:

```bash
npm run test
```

Ou diretamente com Vitest:

```bash
npx vitest
```

### 4.4. Exemplos de Testes

#### `pages/assinaturas/nova.vue`

- **Validação de Campos**: Confirma que o valor é formatado corretamente como moeda brasileira (R$).
- **Envio de Formulário**: Verifica toast em caso de campos obrigatórios vazios.
- **Fluxo de Sucesso**: Simula envio bem-sucedido do formulário, exibindo toast de sucesso e redirecionando para a página inicial.

---

## 5. Considerações Finais

O projeto apresenta uma arquitetura bem estruturada, com uso eficiente das capacidades do Nuxt 3 e Vue 3. A adição de testes automatizados reforça a **qualidade do código** e facilita a manutenção a longo prazo, garantindo que novas funcionalidades ou refatorações não quebrem funcionalidades existentes. A experiência do usuário é reforçada por uma UI elegante e interações responsivas.
