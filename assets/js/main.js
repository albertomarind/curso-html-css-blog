const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const CLEAR = 'C';
const EQUAL = '=';

let display = {
    ref: document.getElementById('display'),
    draw: function (newVal) {
        this.ref.textContent = newVal;
    },
    clear: function () {
        this.ref.textContent = '';
    }
};

let calculator = {
    currentQuantity: '',
    history: [],
    handleClear: function () {
        display.clear();
    },
    handleEquals: function () {
        this.history.push(this.currentQuantity);
        let quantityToEval = this.history.toString().replaceAll(',', '');
        let result = Function('return ' + quantityToEval)();
        display.draw(result);
        this.history = [];
        this.history.push(String(result));
    },
    handleOperations: function (event) {
        let symbol = event.target.textContent
        this.history.push(this.currentQuantity);
        switch (symbol) {
            case PLUS:
                this.history.push(PLUS);
                break;
            case MINUS:
                this.history.push(MINUS);
                break;
            case MULTIPLY:
                this.history.push(MULTIPLY);
                break;
            case DIVIDE:
                this.history.push(DIVIDE);
                break;
        }
        display.clear();
        this.currentQuantity = '';
    },
    handleNumbers: function (event) {
        this.currentQuantity = this.currentQuantity + event.target.textContent;
        display.draw(this.currentQuantity);
    }
}

document.querySelectorAll('.calculadora .button').forEach(function (button) {
    let symbol = button.textContent;
    if (symbol == PLUS ||
        symbol == MINUS ||
        symbol == MULTIPLY ||
        symbol == DIVIDE) {
        button.addEventListener('click', calculator.handleOperations.bind(calculator));
    } else if (symbol == EQUAL) {
        button.addEventListener('click', calculator.handleEquals.bind(calculator));
    } else if (symbol == CLEAR) {
        button.addEventListener('click', calculator.handleClear);
    } else {
        button.addEventListener('click', calculator.handleNumbers.bind(calculator));
    }
});
