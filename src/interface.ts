import { StateMachine } from "./stateMachine";

export interface MachineState {
    selectItem(context: StateMachine, item: string) : void;
    insertCoin(context: StateMachine, amount: number) : void;
    dispenseItem(context: StateMachine) : void;
}