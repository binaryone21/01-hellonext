import React, { useState, useEffect } from 'react';

// Next.js 에서 페이지 이동 기능을 제공하는 컴포넌트
import Link from 'next/link';

import styled from 'styled-components';
import Footer from "@/pages/basic/_02_params/components/Footer";
import Header from "@/pages/basic/_02_params/components/Header";
import Meta from "@/pages/basic/_02_params/components/Meta";
import GlobalStyle from "@/pages/basic/_02_params/styles/GlobalStyle";


const Index = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    // 이 컴포넌트가 브라우저에 의해 최초로 렌더링 될 때 실행되는 hook 정의
    useEffect(() => {
        // 웹 브라우저에 의해 실행될 경우에만 window 객체에 접근 가능하다.
        // (백엔드 모드일 경우에는 window 객체가 없음)
        if(window) {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <>
            <Meta title="index"/>
            <GlobalStyle />
            <Header />
            <div>
                <h1>여기는 index.js 입니다.</h1>
                <p>{ currentUrl }</p>
            </div>
            <Footer />
        </>
    )
}

export default Index;