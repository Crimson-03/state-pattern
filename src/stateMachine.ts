import { IdleState } from "./concreteState";
import { MachineState } from "./interface";

export class StateMachine {
    private currentState : MachineState;
    private item: string;
    private amount : number;


    constructor() {
        this.item = '',
        this.amount = 0;
        this.currentState = new IdleState();
    }

    setState(newState: MachineState) {
        this.currentState = newState;
    }

    setSelectedItem(item: string) : void {
        this.item = item;
    }

    setInsertedAmount(amount: number) {
        this.amount = amount;
    }

    getSelectedItem() : string {
        return this.item;
    }

    selectItem(item: string) : void {
        this.currentState.selectItem(this, item);
    }

    insertCoin(amount: number) : void {
        this.currentState.insertCoin(this, amount);
    }

    dispenseItem() : void {
        this.currentState.dispenseItem(this);
    }

    reset() : void {
        this.item = '';
        this.amount = 0;
        this.currentState = new IdleState();
    }

}