import { useMobileMenu } from '@/store/mobilemenu.store'

import Button from './Button'
import Navigation from './Navigation'

const MobileMenu = () => {
	const { isOpen } = useMobileMenu()

	return (
		<div
			className={`${
				isOpen ? 'h-44 bg-header' : 'h-0 bg-header/60'
			} absolute z-10 w-full overflow-hidden  transition-all sm:hidden`}
		>
			<div className="flex-center flex-col gap-4 pb-4">
				<Navigation />
				<Button />
			</div>
		</div>
	)
}

export default MobileMenu
