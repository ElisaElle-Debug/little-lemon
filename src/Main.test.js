import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of available times', () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns available times for the selected date', () => {
  const state = [];

  const action = {
    type: 'update_times',
    date: '2026-09-26',
  };

  const times = updateTimes(state, action);

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});