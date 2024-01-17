import React from 'react';
import Link from 'next/link';

const Index = () => {
	return (
		<>
			<div><Link href="basic/_01_hello_next">01. Hello Next</Link></div>
			<div><Link href="basic/_02_params">02. Params</Link></div>
		</>
	)
}

export default Index;