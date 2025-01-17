import Head from 'next/head';
import OpenGraph, { Props as OpenGraphProps } from './OpenGraph';
import Footer from './Footer';
import Header from './Header';

export type Props = OpenGraphProps;

const Layout: React.FC<Props> = ({ children, ...props }) => (
	<div className="flex flex-col min-h-full">
		<Head>
			<title>{`${props.title} · ${props.siteName}`}</title>
			<meta name="description" content={props.description} />
			<meta name="author" content="ElCholoGamer" />
			<meta name="theme-color" content="#0f172a" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@ElCholoGamer" />
		</Head>
		<OpenGraph {...(props as OpenGraphProps)} />

		<Header />
		<div className="flex-grow">{children}</div>
		<Footer />
	</div>
);

Layout.defaultProps = {
	siteName: "Cholo's Dev Blog",
	description: 'The blog of a guy who likes programming a bit too much.',
};

export default Layout;
