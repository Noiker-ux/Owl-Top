export const API = {
	topPage: {
		find: process.env.Next_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: process.env.Next_PUBLIC_DOMAIN + '/api/top-page/byAlias',
	},
	product: {
		find: process.env.Next_PUBLIC_DOMAIN + '/api/product/find',
	},
	review: {
		createDemo: process.env.Next_PUBLIC_DOMAIN + '/api/review/create-demo',
	},
};
