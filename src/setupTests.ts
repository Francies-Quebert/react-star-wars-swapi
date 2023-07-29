// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import server from './mocks/server';
import { store } from './store/store';
import { emptySplitApi } from './slice/emptySplitApi';
import { waitFor } from '@testing-library/react';
// import { server } from './mocks/api/server'
// import { apiSlice } from './app/api/apiSlice'
// import { setupStore } from './app/store'

beforeAll(() => {
    server.listen({onUnhandledRequest:'bypass'});
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(async () => {
    server.resetHandlers();
    // This is the solution to clear RTK Query cache after each test
    await waitFor(() => { store.dispatch(emptySplitApi.util.resetApiState()); })
});

// Clean up after the tests are finished.
afterAll(() => server.close());