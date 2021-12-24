import React from 'react';
import { useSelector, useDispatch, useModel } from 'umi';
import { CeshiModelState } from '@/models/dvaExample';

const Home: React.FC = () => {
  const ceshiState = useSelector<any, { CeshiModel: CeshiModelState }>((state) => state);
  const dispatch = useDispatch();
  // 只能在组件初始化时使用, 并且无法models无法阻塞
  const { asyncName } = useModel('modelExample');
  return (
    <>
      开发中
      <div>saga-name:{ceshiState.CeshiModel.name}</div>
      <button onClick={() => dispatch({ type: 'CeshiModel/getName' })}>
        saga异步更改（1.5秒后）
      </button>
      <div>model-name:{asyncName}</div>
    </>
  );
};
export default Home;
