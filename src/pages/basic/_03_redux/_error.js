import React, { useEffect, useState } from 'react';
import Meta from "@/pages/basic/_03_redux/components/Meta";
import styled from 'styled-components';
import _error from '@/pages/basic/_03_redux/images/_error.png';

// next 에서 가져오는 이미지는 JSON 형식
// --> { src: 파일경로 }
const ErrorContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  background-image: url(${_error.src});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

const Error = (statusCode) => {
	// FrontEnd 모드인지 Backend 모드인지 감지하기 위한 상태값
	const [isFrontend, setIsFrontEnd] = useState(false);

	// 페이지가 렌더링이 되었다면 Frontend 모드임
	useEffect(() => {
		setIsFrontEnd(true);
	}, []);

	// 프론트엔드 모드가 아닐경우 화면 표시 안함
	if(!isFrontend) {
		return <></>;
	}

	return (
		<ErrorContainer>
			<Meta title={`${statusCode}에러가 발생했습니다.`} />
		</ErrorContainer>
	)
};

// props 를 구조분해 하여 백엔드 객체(res)와 에러객체로 파라미터 설정
Error.getInitialProps = async ({ res, err }) => {
	// 백엔드 객체가 있다면? --> 백엔드 객체의 상태코드값을 복사
	// 백엔드 객체가 없다면? --> 에러객체의 상태코드값을 복사, 없으면 404
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode : statusCode };
}

export default Error;