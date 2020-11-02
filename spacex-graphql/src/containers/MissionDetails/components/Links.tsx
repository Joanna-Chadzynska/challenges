import { Card } from 'components';
import { Wrapper } from 'components/Header/styles/header';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import {
	FaFile,
	FaNewspaper,
	FaRedditAlien,
	FaWikipediaW,
} from 'react-icons/fa';
import { SectionTitle } from 'styles/SectionTitle';

type LinksProps = Pick<LaunchViewModel, 'links'>;

const Links: React.SFC<LinksProps> = ({ links }) => {
	const linksGroup = [
		{
			id: 'presskit',
			name: 'Presskit',
			link: `${links.presskit}`,
			icon: <FaFile />,
		},
		{
			id: 'article',
			name: 'Article',
			link: `${links.article_link}`,
			icon: <FaNewspaper />,
		},
		{
			id: 'redditCampaign',
			name: 'Reddit Campaign',
			link: `${links.reddit_campaign}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditLaunch',
			name: 'Reddit Launch',
			link: `${links.reddit_launch}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditMedia',
			name: 'Reddit Media',
			link: `${links.reddit_media}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditRecovery',
			name: 'Reddit Recovery',
			link: `${links.reddit_recovery}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'wikipedia',
			name: 'Wikipedia',
			link: `${links.wikipedia}`,
			icon: <FaWikipediaW />,
		},
	];
	return (
		<Wrapper>
			<section>
				<SectionTitle>mission links</SectionTitle>

				<Card.Group>
					{linksGroup.map((link) => (
						<li key={link.id}>
							<a href={link.link} target='_blank' rel='noopener noreferrer'>
								{link.icon}
								<span>{link.name}</span>
							</a>
						</li>
					))}
				</Card.Group>
			</section>
		</Wrapper>
	);
};

export default Links;