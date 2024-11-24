/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("@ducanh2912/next-pwa").default({
dest: "public",
});

module.exports = withPWA({
// Your Next.js config
});

const nextConfig = {
	rewrites: () => {
		return [
			{
				source: '/auth/yandex',
				destination: 'http://localhost:4200/auth/yandex'
			},
			{
				source: '/auth/google',
				destination: 'http://localhost:4200/auth/google'
			},
			{
				source: '/auth/github',
				destination: 'http://localhost:4200/auth/github'
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com', 
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net',
				port: '',
				pathname: '/**'
			}
		]
	}
}

export default nextConfig