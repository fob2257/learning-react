export const CountdownActions = dispatcher =>
  ({
    tick(count) {
      dispatcher.handleAction({ type: 'TICK', count: count - 1 });
    },
    reset(count) {
      dispatcher.handleAction({ type: 'RESET', count });
    }
  });
