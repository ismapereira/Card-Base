/**
 * Cartão Profissional - Script Principal
 * Este arquivo contém funcionalidades interativas para o cartão profissional
 */

// Espera o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Adiciona efeito de hover nos botões sociais
    const socialButtons = document.querySelectorAll('.social-button');
    
    socialButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Adiciona analytics de clique (opcional)
        button.addEventListener('click', function() {
            const buttonType = this.classList[1]; // pega o tipo de botão (whatsapp, instagram, etc)
            console.log(`Clique no botão: ${buttonType}`);
            // Aqui você pode adicionar código para rastreamento de analytics
        });
    });

    // Função para personalizar o tema do cartão
    // EDITE AQUI: Descomente e modifique as cores conforme necessário para a profissão
    /*
    function setCustomTheme(primaryColor, secondaryColor, accentColor) {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--accent-color', accentColor);
    }
    
    // Exemplos de temas por profissão:
    // Médico: setCustomTheme('#4a90e2', '#2c3e50', '#e74c3c');
    // Advogado: setCustomTheme('#8e44ad', '#2c3e50', '#f39c12');
    // Designer: setCustomTheme('#1abc9c', '#2c3e50', '#e74c3c');
    // Arquiteto: setCustomTheme('#34495e', '#2c3e50', '#f1c40f');
    */
});
