import rootReducer from './../../src/reducers/index';

describe("rootReducer", () => {
  test('Should return default state if no action type is not recognized', () => {
    expect(rootReducer({ type: null })).toEqual({});
  });
});
