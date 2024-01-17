/**
 * Next.js 의 Auto Route 를 확인하는 용도의 샘플 파일
 * --> 폴더구조가 URL 이 된다.
 * 각 컴포넌트의 구성방법은 React.js 와 완벽하게 일치한다.
 * --> styled component, event 처리, hook 사용 등
 */
import React, { useState, useCallback } from 'react';
import Footer from "@/pages/basic/_02_params/components/Footer";
import Header from "@/pages/basic/_02_params/components/Header";

const Introduce = () => {
	const [msg, setMsg] = useState('');
	const onMsgChange = useCallback(e => {
		setMsg(e.currentTarget.value);
	}, []);

	return (
		<>
			<Header />
			<div>
				<h1>introduce</h1>
				<div>
					<input type="text" value={ msg } onChange={ onMsgChange }/>
				</div>
				<div>
					<p>{ msg }</p>
					<p>{ msg }</p>
					<p>{ msg }</p>
					<p>{ msg }</p>
					<p>{ msg }</p>
				</div>
			</div>
			<Footer />
		</>
	)
};

export default Introduce;