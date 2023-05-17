/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary = '#333'
const secondary = '#888'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary,
			secondary,
			black: colors.black,
			neutral: colors.neutral,
			transparent: colors.transparent,
			white: colors.white,
			red: colors.red,
		},
		extend: {
			backgroundImage: {
				'blue-gradient':
					'linear-gradient(244deg, rgba(0, 0, 0, 0) 0%, #000B27 100%)',
				'blue-section-gradient':
					'linear-gradient(230deg, #204a72 0%, #031432 100%)',
			},
			colors: {
				main: '#1E0044',
				yellow: '#FFD262',
				gray: '#f4f4f4',
				blue: '#0B3054',
			},
			fontSize: {
				10: '0.625rem',
				11: '0.6875rem',
				6.5: '4.0625rem',
			},
			maxWidth: {
				main: '90rem',
			},

			screens: {
				sx: '425px',
				'2md': '900px',
			},
			spacing: {
				1.25: '0.3125rem',
				layout: '16px',
			},
			transitionDuration: {
				DEFALUT: '200ms ',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
				},
				'.flex-center-bettween': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				'.flex-center-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.container': {
					width: '100%',
					maxWidth: theme('maxWidth.main'),
					padding: `0 ${theme('padding.layout')}`,
					margin: `0 auto`,
				},
			})
		}),
	],
}
