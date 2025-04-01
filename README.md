# Cartão Profissional Personalizado

Um cartão profissional digital elegante, minimalista e totalmente responsivo, projetado para ser facilmente personalizável para profissionais de diversas áreas.

## 📱 Mobile First

Este cartão foi desenvolvido seguindo a abordagem Mobile First, sendo ideal para ser compartilhado como link no Instagram e outras redes sociais.

## ✨ Características

- Design limpo e minimalista
- Totalmente responsivo (funciona em qualquer dispositivo)
- Facilmente personalizável (cores, ícones, links)
- Otimizado para compartilhamento em redes sociais
- Comentários detalhados para facilitar a edição

## 🛠️ Como Personalizar

### 1. Foto do Profissional

1. Substitua o arquivo `assets/images/profile-placeholder.jpg` pela foto do profissional
2. Recomendação: use uma imagem quadrada de pelo menos 300x300 pixels

### 2. Informações Pessoais

No arquivo `index.html`, localize e edite:

```html
<!-- ÁREA DE PERSONALIZAÇÃO: Nome e profissão -->
<div class="profile-info">
    <!-- EDITE AQUI: Nome do profissional -->
    <h1>Seu Nome</h1>
    <!-- EDITE AQUI: Profissão/Cargo -->
    <p class="profession">Sua Profissão</p>
    <!-- EDITE AQUI: Breve descrição ou slogan (opcional) -->
    <p class="description">Breve descrição ou slogan profissional</p>
</div>
```

### 3. Símbolos da Profissão

No arquivo `index.html`, localize e edite:

```html
<!-- ÁREA DE PERSONALIZAÇÃO: Símbolos da profissão -->
<div class="profession-symbols">
    <!-- EDITE AQUI: Adicione ou remova ícones conforme a profissão -->
    <i class="fas fa-briefcase"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-certificate"></i>
</div>
```

Você pode encontrar mais ícones em [Font Awesome](https://fontawesome.com/icons).

### 4. Links e Botões Sociais

No arquivo `index.html`, localize e edite:

```html
<!-- ÁREA DE PERSONALIZAÇÃO: Botões com links -->
<div class="social-links">
    <!-- EDITE AQUI: Links para redes sociais e contatos -->
    <!-- Você pode adicionar, remover ou modificar os botões conforme necessário -->
    
    <!-- Botão de WhatsApp -->
    <a href="https://wa.me/5500000000000" class="social-button whatsapp">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
    </a>
    
    <!-- Outros botões... -->
</div>
```

### 5. Cores e Tema

No arquivo `css/styles.css`, você pode personalizar as cores conforme a profissão:

1. Localize a seção `/* ===== VARIÁVEIS DE CORES PERSONALIZÁVEIS ===== */`
2. Descomente o bloco `:root` e ajuste as cores conforme necessário

Alternativamente, no arquivo `js/script.js`, você pode:

1. Descomente a função `setCustomTheme`
2. Escolha um dos temas predefinidos ou crie o seu próprio

### 6. Informações Adicionais

No arquivo `index.html`, localize e edite:

```html
<!-- ÁREA DE PERSONALIZAÇÃO: Informações adicionais -->
<div class="additional-info">
    <!-- EDITE AQUI: Adicione informações adicionais como endereço, horário de atendimento, etc. -->
    <p><i class="fas fa-map-marker-alt"></i> Seu Endereço, Cidade - Estado</p>
    <p><i class="far fa-clock"></i> Horário de Atendimento: Seg-Sex, 9h às 18h</p>
</div>
```

### 7. Copyright

No arquivo `index.html`, localize e edite:

```html
<!-- Copyright discreto -->
<div class="copyright">
    <p>&copy; 2025 Ismael</p>
</div>
```

Você pode personalizar o nome ou removê-lo completamente se desejar.

## 📋 Estrutura de Arquivos

```
Card-Base/
├── assets/
│   └── images/
│       └── profile-placeholder.jpg
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## 🚀 Como Usar

1. Personalize o cartão conforme as instruções acima
2. Hospede os arquivos em um servidor web (GitHub Pages, Netlify, Vercel, etc.)
3. Compartilhe o link nas suas redes sociais

## 📝 Sugestões por Profissão

### Médicos
- Ícones: `fa-stethoscope`, `fa-heartbeat`, `fa-hospital`
- Cores: Tons de azul e verde (#4a90e2, #2c3e50)

### Advogados
- Ícones: `fa-balance-scale`, `fa-gavel`, `fa-book`
- Cores: Tons de roxo e dourado (#8e44ad, #f39c12)

### Designers
- Ícones: `fa-paint-brush`, `fa-pencil-ruler`, `fa-palette`
- Cores: Tons de verde-água e coral (#1abc9c, #e74c3c)

### Arquitetos
- Ícones: `fa-drafting-compass`, `fa-ruler-combined`, `fa-building`
- Cores: Tons de cinza escuro e amarelo (#34495e, #f1c40f)

## 📱 Visualização em Dispositivos

O cartão se adapta automaticamente a diferentes tamanhos de tela:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

---

Desenvolvido com ❤️ para profissionais que valorizam elegância e simplicidade.
