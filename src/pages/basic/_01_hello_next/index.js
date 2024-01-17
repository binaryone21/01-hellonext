import React from 'react';

// Next.js 에서 페이지 이동 기능을 제공하는 컴포넌트
import Link from 'next/link';

import styled from 'styled-components';
import Footer from "@/pages/basic/_01_hello_next/components/Footer";
import Header from "@/pages/basic/_01_hello_next/components/Header";

const Title = styled.div`
  color: blue;
`;

const Index = () => {
    return (
        <>
            <Header />
            <div>
                <Title>index</Title>
                <Link href="_01_hello_next/hello">hello.js 로 이동</Link>
                <Link href="_01_hello_next/world">world.js 로 이동</Link>
                <Link href="_01_hello_next/about/introduce.">introduce.js 로 이동</Link>
            </div>
            <Footer />
        </>
    )
}

export default Index;