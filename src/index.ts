import { StateMachine } from "./stateMachine";

const vendingMachine = new StateMachine();
vendingMachine.dispenseItem();
vendingMachine.selectItem('Chocolate');
vendingMachine.dispenseItem();
vendingMachine.insertCoin(20);
vendingMachine.insertCoin(30);
vendingMachine.dispenseItem();