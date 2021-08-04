declare const require: any

export const environment = {
	production: true,
	API: '',
	VERSION: 'v1',
	VERSION_APP: require('../../package.json').version
};
