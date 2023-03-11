// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './__tests__/server'
import { charactersApi } from "./store/apis/charactersApi";
import { episodesApi } from "./store/apis/episodesApi";
import { locationsApi } from "./store/apis/locationsApi";
import { RootState, setupStore } from './store'
import { PreloadedState } from '@reduxjs/toolkit';

const store = setupStore({} as PreloadedState<RootState>);

// Establish API mocking before all tests.
beforeAll(() => {
    server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers();
    // This is the solution to clear RTK Query cache after each test
    store.dispatch(charactersApi.util.resetApiState());
    store.dispatch(episodesApi.util.resetApiState());
    store.dispatch(locationsApi.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => server.close());
