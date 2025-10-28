import { MachineState } from "./interface";
import { StateMachine } from "./stateMachine";

export class IdleState implements MachineState {
  selectItem(context: StateMachine, item: string): void {
    context.setSelectedItem(item);
    console.info('Item selected... ', context.getSelectedItem());
    context.setState(new ItemSelectedState());
  }

  insertCoin(context: StateMachine, amount: number): void {
    console.error("Plese select item first...");
  }

  dispenseItem(context: StateMachine): void {
    console.error('Please select item first...');
  }
}


export class ItemSelectedState implements MachineState {
    selectItem(context: StateMachine, item: string): void {
        console.error('Item is alreay selected... ', context.getSelectedItem());
    }

    insertCoin(context: StateMachine, amount: number): void {
        context.setInsertedAmount(amount);
        console.log('coin inserted... Rs.', amount, 'for item ', context.getSelectedItem());
        context.setState(new HasMoneyState());
    }

    dispenseItem(context: StateMachine): void {
        console.error('Please insert coin first...');
    }
}

export class HasMoneyState implements MachineState {
    selectItem(context: StateMachine, item: string): void {
        console.error('Item is already selected...');
    }

    insertCoin(context: StateMachine, amount: number): void {
        console.error('Coin has already inserted');
    }

    dispenseItem(context: StateMachine): void {
        console.log('Dispensing item...', context.getSelectedItem());
        context.setState(new DispensingState());
        setTimeout(() => {
            console.log('Item Dispensed...');
        }, 5000);
        context.reset();
    }
}

export class DispensingState implements MachineState {
    selectItem(context: StateMachine, item: string): void {
        console.warn('Item is dispensing, please wait...');
    }

    insertCoin(context: StateMachine, amount: number): void {
        console.error('Dispensing in progress...');
    }

    dispenseItem(context: StateMachine): void {
        console.log('Item is Dispensing...');
    }
}