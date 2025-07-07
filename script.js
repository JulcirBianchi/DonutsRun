    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão do Enter
            calculate();
        }
    });

function clearScreen() {
        document.getElementById("result").value = "";
    }
     
    // This function display values
    function display(value) {
        document.getElementById("result").value += value;
    }

    function checkValue(sender) {
        let min = sender.min;
        let max = sender.max;
        let value = parseInt(sender.value);
        if (value>max) {
            sender.value = max;
        } else if (value<min) {
            sender.value = max;
        }
    }
     
    // This function evaluates the expression and returns result
    function calculate() {

        var amount            =  document.getElementById("amount").value;
        var percentageJam     =  document.getElementById("percentageJam").value;
        var percentageCustard =  document.getElementById("percentageCustard").value;

        var description = "";

        if ((parseInt(percentageCustard) + parseInt(percentageJam)) > 100 || (parseInt(percentageCustard) + parseInt(percentageJam)) < 100)
        {
            description = "The sum of the percentages should not be lower or higher than 100.";
            document.getElementById("result").value = description;
            return;
        }

        if ((amount < 0) || (percentageJam > 100 || percentageJam < 0 ) || (percentageCustard > 100 || percentageCustard < 0 ))
        {
            description = "Invalid inputs."
            document.getElementById("result").value = description;
            return;
        }

        var resultJam     = (amount / 100) * percentageJam;
        var resultCustard = (amount / 100) * percentageCustard;

        var boxesJam     = (resultJam / 60).toFixed(2);
        var boxesCustard = (resultCustard / 60).toFixed(2);

        description = `${resultJam} Jam Donuts (${boxesJam} boxes of jam) \n ${resultCustard} Custard Donuts (${boxesCustard} boxes of custard)`

        Swal.fire(
            'Calculator 1 - Done!',
            description,
            'success'
          )
        document.getElementById("result").value = description;
    }

    // Função para o segundo formulário (cópia do primeiro)
    function calculate2() {

        var amount            =  document.getElementById("amount2").value;
        var percentageJam     =  document.getElementById("percentageJam2").value;
        var percentageCustard =  document.getElementById("percentageCustard2").value;

        var description = "";

        if ((parseInt(percentageCustard) + parseInt(percentageJam)) > 100 || (parseInt(percentageCustard) + parseInt(percentageJam)) < 100)
        {
            description = "The sum of the percentages should not be lower or higher than 100.";
            document.getElementById("result").value = description;
            return;
        }

        if ((amount < 0) || (percentageJam > 100 || percentageJam < 0 ) || (percentageCustard > 100 || percentageCustard < 0 ))
        {
            description = "Invalid inputs."
            document.getElementById("result").value = description;
            return;
        }

        var resultJam     = (amount / 100) * percentageJam;
        var resultCustard = (amount / 100) * percentageCustard;

        var boxesJam     = (resultJam / 60).toFixed(2);
        var boxesCustard = (resultCustard / 60).toFixed(2);

        description = `${resultJam} Jam Donuts (${boxesJam} boxes of jam) \n ${resultCustard} Custard Donuts (${boxesCustard} boxes of custard)`

        Swal.fire(
            'Calculator 2 - Done!',
            description,
            'success'
          )
        document.getElementById("result").value = description;
    }

    // Variáveis para controle do tab atual e transições
    let currentTab = 0;
    let isTransitioning = false;
    const totalTabs = 2;

    // Funções para controlar o sistema de tabs - versão melhorada
    function showTab(tabIndex, direction = 'fade') {
        if (isTransitioning || tabIndex === currentTab) return;
        
        isTransitioning = true;
        
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');
        const currentPanel = document.getElementById(`tab-${currentTab}`);
        const targetPanel = document.getElementById(`tab-${tabIndex}`);
        
        // Remove active dos botões
        tabBtns.forEach(btn => btn.classList.remove('active'));
        
        // Animação de saída
        if (direction === 'slide-left') {
            currentPanel.classList.add('slide-out-left');
        } else if (direction === 'slide-right') {
            currentPanel.classList.add('slide-out-right');
        } else {
            currentPanel.classList.add('fade-out');
        }
        
        setTimeout(() => {
            // Esconde o painel atual
            currentPanel.classList.remove('active', 'slide-out-left', 'slide-out-right', 'fade-out');
            
            // Mostra o novo painel
            targetPanel.classList.add('active');
            
            // Animação de entrada
            if (direction === 'slide-left') {
                targetPanel.classList.add('slide-in-left');
            } else if (direction === 'slide-right') {
                targetPanel.classList.add('slide-in-right');
            } else {
                targetPanel.classList.add('fade-in');
            }
            
            // Ativa o botão correspondente
            tabBtns[tabIndex].classList.add('active');
            
            // Atualiza o indicador visual da navegação
            const tabNavigation = document.querySelector('.tab-navigation');
            tabNavigation.className = `tab-navigation tab-${tabIndex}`;
            
            setTimeout(() => {
                targetPanel.classList.remove('slide-in-left', 'slide-in-right', 'fade-in');
                isTransitioning = false;
            }, 300);
            
        }, 150);
        
        currentTab = tabIndex;
    }

    // Variáveis para controle de touch/swipe
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    // Função para detectar swipe
    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = Math.abs(touchEndY - touchStartY);
        const minSwipeDistance = 50;
        
        // Verifica se é um swipe horizontal (não vertical)
        if (Math.abs(deltaX) > minSwipeDistance && deltaY < 100) {
            if (deltaX > 0 && currentTab > 0) {
                // Swipe right - vai para tab anterior
                showTab(currentTab - 1, 'slide-right');
            } else if (deltaX < 0 && currentTab < totalTabs - 1) {
                // Swipe left - vai para próximo tab
                showTab(currentTab + 1, 'slide-left');
            }
        }
    }

    // Inicialização quando a página carrega
    document.addEventListener('DOMContentLoaded', function() {
        // Garantir que o primeiro tab esteja ativo
        showTab(0);
        
        // Adicionar eventos de touch para swipe
        const tabContainer = document.querySelector('.tab-container');
        
        // Eventos de touch
        tabContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, {passive: true});
        
        tabContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, {passive: true});
        
        // Eventos de mouse para desktop (opcional)
        let mouseStartX = 0;
        let mouseStartY = 0;
        let isDragging = false;
        
        tabContainer.addEventListener('mousedown', function(e) {
            mouseStartX = e.clientX;
            mouseStartY = e.clientY;
            isDragging = true;
            e.preventDefault();
        });
        
        tabContainer.addEventListener('mousemove', function(e) {
            if (isDragging) {
                e.preventDefault();
            }
        });
        
        tabContainer.addEventListener('mouseup', function(e) {
            if (isDragging) {
                const deltaX = e.clientX - mouseStartX;
                const deltaY = Math.abs(e.clientY - mouseStartY);
                const minSwipeDistance = 50;
                
                if (Math.abs(deltaX) > minSwipeDistance && deltaY < 100) {
                    if (deltaX > 0 && currentTab > 0) {
                        showTab(currentTab - 1, 'slide-right');
                    } else if (deltaX < 0 && currentTab < totalTabs - 1) {
                        showTab(currentTab + 1, 'slide-left');
                    }
                }
                isDragging = false;
            }
        });
        
        // Prevenir arrastar fora do container
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Suporte a teclado para navegação (setas left/right)
        document.addEventListener('keydown', function(e) {
            if (e.target.type !== 'number' && e.target.type !== 'text') { // Não interferir nos inputs
                if (e.key === 'ArrowLeft' && currentTab > 0) {
                    e.preventDefault();
                    showTab(currentTab - 1, 'slide-right');
                } else if (e.key === 'ArrowRight' && currentTab < totalTabs - 1) {
                    e.preventDefault();
                    showTab(currentTab + 1, 'slide-left');
                }
            }
        });
    });