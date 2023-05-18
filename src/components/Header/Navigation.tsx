import AnchorLink from 'react-anchor-link-smooth-scroll'

import { navigationData } from '@/data/navigation.data'

const Navigation = () => {
	return (
		<nav>
			<ul className="flex-center-bettween flex-col gap-2 sm:flex-row">
				{navigationData.map((item) => (
					<li
						className="transition-colors hover:text-yellow-100"
						key={item.title}
					>
						<AnchorLink offset={100} href={item.href}>
							{item.title}
						</AnchorLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
