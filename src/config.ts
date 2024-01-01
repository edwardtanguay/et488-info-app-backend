import dotenv from 'dotenv';

dotenv.config();

export const getPort = (): number => {
	return 4887;
}

export const getAppName = (): string => {
	const appName = process.env.APP_NAME;
	return appName ? appName : 'ERROR: APP_NAME NOT DEFINED';
}

