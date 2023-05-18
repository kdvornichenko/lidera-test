/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const shadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
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
			boxShadow: {
				main: shadow,
			},
			colors: {
				black: '#191919',
				blue: '#1573ff',
				gray: '#979797',
				header: '#120127',
				main: '#1E0044',
				purple: '#8836AE',
				yellow: {
					100: '#FFD262',
					200: '#FDC949',
					300: '#F7BA4B',
				},
			},
			dropShadow: {
				main: shadow,
			},
			fontSize: {
				10: '0.625rem',
				11: '0.6875rem',
				'1.5xl': '1.375rem',
				'3.5xl': '2.0625rem',
				'6.5xl': '4.0625rem',
			},
			maxWidth: {
				main: '90rem',
				header: '79.625rem',
				'0.5xs': '16.25rem',
			},
			borderRadius: {
				'2lg': '10px',
				'4xl': '30px',
			},
			screens: {
				sx: '425px',
				'2sx': '460px',
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
