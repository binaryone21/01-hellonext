import React, { useEffect, useState } from 'react';
import Meta from "@/pages/basic/_03_redux/components/Meta";
import styled from 'styled-components';
import _404 from '@/pages/basic/_03_redux/images/_404.png';

// next 에서 가져오는 이미지는 JSON 형식
// --> { src: 파일경로 }
const PageNotFoundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  background-image: url(${_404.src});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

const PageNotFound = () => {
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
		<PageNotFoundContainer>
			<Meta title="페이지를 찾을 수 없습니다." />
		</PageNotFoundContainer>
	)
};

// 이거 전체 안쓰나?
PageNotFound.getInitialProps = async (props) => {
	return {
		from : props.req ? "backend" : "frontend"
	}
}

export default PageNotFound;