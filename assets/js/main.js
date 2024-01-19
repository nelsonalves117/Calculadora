class Calculadora {
    constructor() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        };

        this.cliqueBotoes = () => {
            document.addEventListener('click', event => {
                const el = event.target;

                if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.apagaUm();
                if (el.classList.contains('btn-eq')) this.realizaConta();
                this.display.focus();
            });
        };

        this.btnParaDisplay = el => this.display.value += el.innerText;

        this.clearDisplay = () => this.display.value = '';

        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta invalida');
                return;
            }
        };

        this.pressionaEnter = () => {
            document.addEventListener('keydown', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });

        };

        this.pressionaBackSpace = () => {
            document.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.apagaUm();
                }
            });
        };
    }
};

const calculadora = new Calculadora;
calculadora.inicia();