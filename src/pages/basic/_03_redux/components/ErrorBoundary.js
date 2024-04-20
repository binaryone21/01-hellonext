import React from 'react';
import Meta from "@/pages/basic/_03_redux/components/Meta";
import styled from 'styled-components';
import _error from '@/pages/basic/_03_redux/images/_error.png';

const ErrorBoundaryContainer = styled.div`
	
`;

/**
 * 전반적인 에러 상황을 감지하는 클래스
 */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

		// 기본 상태는 에러 없음
		this.state = { hasError : false };
	}

	// 에러가 발생한 경우 자동으로 호출되는 메서드
	static getDerivedStateFromError(error) {
		// 상태를 에러 있음으로 변경
		return { hasError : true };
	}

	// 이 클래스가 화면에 표시될 때 호출되는 메서드 --> useEffect 와 동일
	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
		console.error(errorInfo);
	}

	// 화면 출력
	render() {
		if(this.state.hasError) {
			return (
				<ErrorBoundaryContainer>
					<Meta title="에러가 발생했습니다." />
				</ErrorBoundaryContainer>
			)
		}

		// 에러가 없다면 기본 화면 구성을 출력
		return this.props.children;
	}
}

export default ErrorBoundary;