/**
 * Test store addons
 */
import { browserHistory } from 'react-router';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });
  });

  describe('registerEpic', () => {
    it('should contain a hook for `registerEpic`', () => {
      expect(typeof store.registerEpic).toBe('function');
    });
  });
});
