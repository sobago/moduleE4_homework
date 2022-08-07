// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
let currentPower = 0

class Switch {
    constructor() {
        this.switch = 0;
    }
    setPower() {
        if (this.switch === 0) {
            this.switch = 1;
            currentPower += this.power;
            console.log(`Прибор ${this.name} включен. Текущая потребляемая мощность ${currentPower} W.`);
        } else {
            this.switch = 0;
            currentPower -= this.power;
            console.log(`Прибор ${this.name} выключен. Текущая потребляемая мощность ${currentPower} W.`);
        }
    }
}


class Device extends Switch {
    constructor(name, power) {
        super();
        this.name = name;
        this.power = +power
    }
}


const lamp = new Device('Настольная лампа', '15')
const computer = new Device('Компьютер', '350')