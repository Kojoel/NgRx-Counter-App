import { counterReducer, initialState } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

describe('Counter Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = counterReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should increment the state', () => {
    const action = increment();
    const state = counterReducer(initialState, action);
    expect(state).toBe(1);
  });

  it('should decrement the state', () => {
    const action = decrement();
    const state = counterReducer(1, action);
    expect(state).toBe(0);
  });

  it('should reset the state', () => {
    const action = reset();
    const state = counterReducer(5, action);
    expect(state).toBe(0);
  });
});