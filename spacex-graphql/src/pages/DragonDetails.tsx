import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from 'styles/Wrapper';

const DragonDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>dragon details</div>
			<Footer />
		</Wrapper>
	);
};

export default DragonDetails;