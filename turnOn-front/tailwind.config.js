/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: '#f2f4f7',
  			secondary: '#fdfdf1',
  			'secondary-2': '#ebeaff',
  			'secondary-3': '#9694ff',
  			accent: '#3d3bf3',
  			'accent-2': '#b0fa3a',
  			'dark-gray': '#344054',
  			'black-80': '#181e29',
  			alert: '#e8d5ee',
  			information: '#eeecb7',
  			unknown: '#c0e6db',
  			success: '#ccebb2'
  		},
  		fontSize: {
  			h1: '43px',
  			h2: '34px',
  			h3: '27px',
  			p: '14px',
  			small: '12px',
  			'h1-desktop': '49px',
  			'h2-desktop': '39px',
  			'h3-desktop': '31px',
  			'p-desktop': '16px',
  			'small-desktop': '13px'
  		},
  		screens: {
  			xl: '1200px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
		poppins: ['Poppins', 'sans-serif'],
		roboto: ['Roboto', 'sans-serif'],
		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
