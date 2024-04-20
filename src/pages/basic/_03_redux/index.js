import React, { useEffect } from 'react';
import Header from "@/pages/basic/_03_redux/components/Header";
import Meta from "@/pages/basic/_03_redux/components/Meta";
import GlobalStyle from "@/pages/basic/_03_redux/styles/GlobalStyle";
import ErrorBoundary from "@/pages/basic/_03_redux/components/ErrorBoundary";

// 리덕스 모듈
import wrapper from './_redux';
// import { Provider } from 'react-redux';

// 상태값을 로드하기 위한 hook 과 action 함수를 dispatch 할 hook 참조
import { useSelector, useDispatch } from "react-redux";

// Slice 에 정의된 액션함수들 참조
import { getList } from "@/pages/basic/_03_redux/slices/DepartmentSlice";

// 로딩바 컴포넌트
import Spinner from "@/pages/basic/_03_redux/components/Spinner";

// 표에 대한 styledComponent
import Table from "@/pages/basic/_03_redux/components/Table";

// 에러정보를 표시하기 위한 컴포넌트
import ErrorView from "@/pages/basic/_03_redux/components/ErrorView";

const Index = ({ Component, pageProps }) => {
    // wrapper 로부터 reduxStore 를 꺼낸다.
    // const { store } = wrapper.useWrappedStore(pageProps);

    // hook 을 통해 slice 가 관리하는 상태값 가져오기
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
    useEffect(() => {
        dispatch(getList());
    }, []);

    return (
        <ErrorBoundary>
            {/*<Provider store={store}>*/}
                <Meta title="index"/>
                <GlobalStyle />
                <Header />
                <div>
                    <Spinner loading={loading} />
                    <h1>여기는 index.js 입니다.</h1>
                </div>
            {/*</Provider>*/}
        </ErrorBoundary>
    )
}

export default Index;