// navbar.js 

        // Referências aos elementos do DOM
        const menu = document.getElementById('menu');
        const mainContent = document.getElementById('main-content');

        // Alterna o estado do menu lateral
        function toggleMenu() {
            const isOpen = menu.classList.contains('active');
            if (isOpen) {
                closeMenu(); // Fecha o menu se estiver aberto
            } else {
                openMenu(); // Abre o menu se estiver fechado
            }
        }

        // Abre o menu lateral
        function openMenu() {
            menu.classList.add('active'); // Adiciona classe para exibir o menu
            menu.setAttribute('aria-hidden', 'false'); // Atualiza atributo de acessibilidade
            mainContent.classList.add('overlay'); // Move o conteúdo principal
        }

        // Fecha o menu lateral
        function closeMenu() {
            menu.classList.remove('active'); // Remove classe para esconder o menu
            menu.setAttribute('aria-hidden', 'true'); // Atualiza atributo de acessibilidade
            mainContent.classList.remove('overlay'); // Restaura posição do conteúdo principal
        }

        // Fecha o menu ao clicar fora dele
        window.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !event.target.closest('.menu-btn')) {
                closeMenu();
            }
        });

        // Fecha o menu ao pressionar a tecla ESC
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
  
