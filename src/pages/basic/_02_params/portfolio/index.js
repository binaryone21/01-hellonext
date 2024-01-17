import React from 'react';
import Link from "next/link";

const index = () => {
	return (
		<div>
			<h1>포트폴리오</h1>
			<ul>
				<li><Link href="/basic/_02_params/portfolio/publish">퍼블리시</Link></li>
				<li><Link href="/basic/_02_params/portfolio/frontend">프론트엔드</Link></li>
				<li><Link href="/basic/_02_params/portfolio/backend">백엔드</Link></li>
			</ul>
		</div>
	)
};

export default index;