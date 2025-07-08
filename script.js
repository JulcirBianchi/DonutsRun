    
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

    // Funções para controlar o sistema de tabs
    function showTab(tabIndex) {
        // Remove a classe active de todos os botões e painéis
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');
        
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
            panel.classList.add('slide-out');
        });
        
        // Adiciona a classe active no botão e painel correspondente
        setTimeout(() => {
            tabPanels.forEach(panel => panel.classList.remove('slide-out'));
            
            tabBtns[tabIndex].classList.add('active');
            const targetPanel = document.getElementById(`tab-${tabIndex}`);
            targetPanel.classList.add('active', 'slide-in');
            
            setTimeout(() => {
                targetPanel.classList.remove('slide-in');
            }, 300);
        }, 150);
    }

    // Inicialização quando a página carrega
    document.addEventListener('DOMContentLoaded', function() {
        // Garantir que o primeiro tab esteja ativo
        showTab(0);
    });