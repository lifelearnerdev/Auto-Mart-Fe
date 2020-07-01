import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import login from '../../../../components/authentication/login/loginAction';
import types from '../../../../components/authentication/login/loginActionTypes';

const mockStore = configureMockStore([thunk, promiseMiddleware]);
let store;

describe('Login Action', () => {
  beforeEach(() => {
    store = mockStore({});
    moxios.install();
  });
  afterAll(() => {
    store.clearActions();
    moxios.uninstall();
  });
  it('should dispatch LOGIN_FAIL action type', async () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 500,
        response: {}
      });
    });

    const expectActionLoading = types.LOGIN_FAIL;
    await store.dispatch(login({ firstName: 'eric' }, {}));
    const dispatchedAction = store.getActions();
    const dispatchedTypes = dispatchedAction.map(action => action.type);
    expect(dispatchedTypes[1]).toEqual(expectActionLoading);
  });

  // it('should dispatch LOGIN_FAIL action type', async () => {
  //   moxios.wait(() => {
  //     const req = moxios.requests.mostRecent();
  //     req.respondWith({
  //       status: 500,
  //       response: {
  //         error: 'network error'
  //       }
  //     });
  //   });

  //   const expectedAction = types.LOGIN_FAIL;
  //   await store.dispatch(login({ firstName: 'eric' }));
  //   const dispatchedAction = store.getActions();
  //   const dispatchedTypes = dispatchedAction.map(action => action.type);
  //   expect(dispatchedTypes[1]).toEqual(expectedAction);
  // });

  it('should dispatch LOGIN_SUCCESS action type', async () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 201,
        response: {
          data: {
            token: 'token'
          }
        }
      });
    });

    const expectedAction = types.LOGIN_SUCCESS;
    await store.dispatch(login({ firstName: 'eric' }));
    const dispatchedAction = store.getActions();
    const dispatchedTypes = dispatchedAction.map(action => action.type);
    expect(dispatchedTypes[1]).toEqual(expectedAction);
  });
  it('should dispatch LOGIN_LOADING action type', async () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 201,
        response: {
          data: {
            token: ''
          }
        }
      });
    });

    const expectedAction = types.LOGIN_LOADING;
    await store.dispatch(login({ firstName: 'eric' }));
    const dispatchedAction = store.getActions();
    const dispatchedTypes = dispatchedAction.map(action => action.type);
    expect(dispatchedTypes[0]).toEqual(expectedAction);
  });
});
