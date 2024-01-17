import React from 'react';
import Header from "@/pages/basic/_02_params/components/Header";
import Footer from "@/pages/basic/_02_params/components/Footer";
import Meta from "@/pages/basic/_02_params/components/Meta";

const World = ({ num1, num2, from }) => {
	return (
		<>
			<Meta title="world"/>
			<Header />
			<div>
				<h1>Wrold</h1>
				<h2>여기는 world.js 입니다.</h2>
				<p>이 페이지는 <b>{ from }</b>에서 실행되었습니다.</p>
				<ul>
					<li>num1={ num1 }</li>
					<li>num2={ num2 }</li>
				</ul>
			</div>
			<Footer />
		</>
	)
}

// pages 폴더 내의 모든 함수들은 getInitialProps 라는 하위 함수를 갖는다.
// 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다.
World.getInitialProps = async (props) => {

	// URL 에 포함되는 QueryString 변수는 이 위치에서 판별한다.
	console.group('getInitialProps');
	console.log('~~~~~')
	console.log(props);
	console.log('~~~~~')
	console.groupEnd();

	let from = 'front';

	// 백엔드에서 동작할 경우 props 안에 req 객체가 포함된다.
	// 이 객체는 일반 Node.js 의 HttpServer 객체와 같은 역할을 수행한다ㅏ.
	if(props.req) {
		from = "backend;"
	}

	// 이 리턴값이 JSX 컴포넌트의 props 로 전달된다.
	return {
		// aaa : 1234,  bbb : 5678
		...props.query,
		from : from
	}
}
/*
World.getServerSideProps = async (props) => {
	console.group("getServerSideProps");
	console.log(props);
	console.groupEnd();

	return {
		name : "serverside"
	}
}
*/

/*
World.getStaticProps = async (props) => {
	console.group("getServerSideProps");
	console.log(props);
	console.groupEnd();

	return {
		name : "static"
	}
}
*/

export default World;