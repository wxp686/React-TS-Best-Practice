import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import Footer from '@/components/Footer';
import HeaderRightRender from '@/components/HeaderRightRender';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState() {}

export const request: RequestConfig = {
  errorConfig: {
    // adaptor: (resData, ctx) => {
    //   // 配置全局异常处理方式
    //   return {
    //     success: resData?.code,
    //     data: resData?.data,
    //     errorMessage: resData?.message,
    //     showType: 0, // 错误时分类型，正确时静默
    //   };
    // },
  },
};

export const layout: RunTimeLayoutConfig = () => {
  return {
    rightContentRender: () => <HeaderRightRender />,
    disableContentMargin: false,
    waterMarkProps: {
      // content: null,
    },
    onPageChange: () => {},
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
  };
};
