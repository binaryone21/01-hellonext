import React from 'react';
import Link from 'next/link';

const _error = () => {
	return (
		<div>
			<h1>Opps!!!!</h1>
			<hr />
			<p>404 에러가 발생했습니다. (페이지를 찾을 수 없습니다.)</p>
			<p><Link href="/">홈으로 이동하기</Link></p>
		</div>
	)
}

export default _error;