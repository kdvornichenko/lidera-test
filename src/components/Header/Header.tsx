import { Squeeze as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'

import { useMobileMenu } from '@/store/mobilemenu.store'

import Button from './Button'
import MobileMenu from './MobileMenu'
import Navigation from './Navigation'

const Header = () => {
	const { isOpen, setIsOpen } = useMobileMenu()
	return (
		<div className="sticky top-0 z-10 w-full">
			<header
				className={`${
					isOpen ? 'bg-header' : 'bg-header/60'
				} 'relative lg:text-1.5xl' px-layout py-5 text-lg font-bold transition-colors`}
			>
				<div className="flex-center mx-auto max-w-header justify-center gap-3 sm:justify-between">
					<Link to="/" className="flex-center w-full max-w-max md:gap-3">
						<img src={logo} alt="Логотип" />
						<div className="text-xl sx:text-3xl sm:hidden lg:block">
							ФИНСГРАМ
						</div>
					</Link>
					<div className="hidden w-full max-w-sm sm:block lg:max-w-xl">
						<Navigation />
					</div>
					<div className="hidden sm:block">
						<Button />
					</div>
				</div>
				<div className="absolute right-layout top-1/2 -translate-y-1/2 sm:hidden">
					<Hamburger
						toggled={isOpen}
						toggle={() => setIsOpen(!isOpen)}
						rounded
					/>
				</div>
			</header>
			<MobileMenu />
		</div>
	)
}

export default Header
