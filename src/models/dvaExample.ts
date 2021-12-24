import { Effect, ImmerReducer, Subscription } from 'umi';

export interface CeshiModelState {
  name: string;
}

export interface CeshiModelType {
  namespace: 'CeshiModel';
  state: CeshiModelState;
  reducers: {
    changeName: ImmerReducer<CeshiModelState>;
  };
  effects: {
    getName: Effect;
  };
  subscriptions: {
    listenHistory: Subscription;
  };
}

const CeshiModel: CeshiModelType = {
  namespace: 'CeshiModel',
  state: {
    name: 'll',
  },
  effects: {
    *getName(action, { call, put }) {
      const res = yield call(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('zz');
          }, 1500);
        });
      });
      yield put({ type: 'changeName', payload: res });
    },
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
  },
  subscriptions: {
    listenHistory({ history }) {
      const unlisten = history.listen((props) => {
        console.log('-----listen', props);
      });
      return unlisten;
    },
  },
};
export default CeshiModel;
