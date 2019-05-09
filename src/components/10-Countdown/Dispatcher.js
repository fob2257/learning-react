import Dispatcher from 'flux';

export class CountdownDispatcher from Dispatcher{
  handleAction(action){
    console.log(`Dispatching action: ${action}`);

    this.dispatch({ source: 'VIEW_ACTION', action });
  };
};
