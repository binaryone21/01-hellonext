import React from 'react';

import MenuLink from "@/pages/basic/_02_params/components/MenuLink";

const Header = ({ title }) => {
	return (
		<div>
			<h1>{ title }</h1>
			<nav>
				<MenuLink href="/basic/_02_params">Home</MenuLink>
				<MenuLink href="/basic/_02_params/hello?num1=100&num2=200">Hello</MenuLink>
				<MenuLink href="/basic/_02_params/world?num1=300&num2=400">World</MenuLink>
				<MenuLink href="/basic/_02_params/about/introduce">소개글</MenuLink>
				<MenuLink href="/basic/_02_params/portfolio">포트폴리오</MenuLink>
				{/*
				<MenuLink href="/basic/_02_params/portfolio/publish">퍼블리싱</MenuLink>
				<MenuLink href="/basic/_02_params/portfolio/frontend">프론트엔드</MenuLink>
				<MenuLink href="/basic/_02_params/portfolio/backend">백엔드</MenuLink>
				*/}
			</nav>
		</div>
	)
}

export default Header;