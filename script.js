// This function clear all the values
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
        var percentageNutella =  document.getElementById("percentageNutella").value;

        var description = "";

        if ((parseInt(percentageCustard) + parseInt(percentageJam) + parseInt(percentageNutella)) > 100 || (parseInt(percentageCustard) + parseInt(percentageJam) + parseInt(percentageNutella)) < 100)
        {
            description = "The sum of the percentages should not be lower or higher than 100.";
            document.getElementById("result").innerText = description;
            return;
        }

        if ((amount < 0) || (percentageJam > 100 || percentageJam < 0 ) || (percentageCustard > 100 || percentageCustard < 0 ) || (percentageNutella > 100 || percentageNutella < 0 ))
        {
            description = "Invalid inputs."
            document.getElementById("result").innerText = description;
            return;
        }

        var resultJam     = (amount / 100) * percentageJam;
        var resultCustard = (amount / 100) * percentageCustard;
        var resultNutella = (amount / 100) * percentageNutella;

        var boxesJam     = resultJam / 20;
        var boxesCustard = resultCustard / 20;
        var boxesNutella = resultNutella / 20;

        description = `${resultJam} Jam Donuts (${boxesJam} boxes of jam) \n ${resultCustard} Custard Donuts (${boxesCustard} boxes of custard) \n ${resultNutella} Nutella Donuts (${boxesNutella} boxes of nutella)`


        document.getElementById("result").innerText = description;
    }