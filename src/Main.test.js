import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the expected available times', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];

  expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same state provided', () => {
  const state = [
    '17:00',
    '18:00',
    '19:00',
  ];

  const action = {
    type: 'update_times',
    date: '2026-09-26',
  };

  expect(updateTimes(state, action)).toEqual(state);
});