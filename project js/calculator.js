document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('calculator-screen');
    const keys = document.querySelector('.calculator-keys');
    let currentValue = '0';
    let operator = null;
    let previousValue = null;

    keys.addEventListener('click', function(event) {
        const target = event.target;
        const action = target.dataset.action;
        const value = target.value;

        if (!target.matches('button')) return;

        switch(action) {
            case 'clear':
                currentValue = '0';
                operator = null;
                previousValue = null;
                break;
            case 'delete':
                if (currentValue.length > 1) {
                    currentValue = currentValue.slice(0, -1);
                } else {
                    currentValue = '0';
                }
                break;
            case 'percent':
                currentValue = String(parseFloat(currentValue) / 100);
                break;
            case 'operator':
                operator = value;
                previousValue = currentValue;
                currentValue = '0';
                break;
            case 'calculate':
                if (operator && previousValue !== null) {
                    currentValue = calculate(previousValue, currentValue, operator);
                    operator = null;
                    previousValue = null;
                }
                break;
            default:
                if (currentValue === '0') {
                    currentValue = value;
                } else {
                    currentValue += value;
                }
        }

        updateScreen();
    });

    function calculate(prev, curr, op) {
        const prevNum = parseFloat(prev);
        const currNum = parseFloat(curr);
        switch(op) {
            case '+':
                return String(prevNum + currNum);
            case '-':
                return String(prevNum - currNum);
            case '*':
                return String(prevNum * currNum);
            case '/':
                return String(prevNum / currNum);
        }
    }

    function updateScreen() {
        screen.textContent = currentValue;
    }
});