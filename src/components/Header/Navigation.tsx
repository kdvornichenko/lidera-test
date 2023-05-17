import { Link } from 'react-router-dom'

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
						<Link to={item.href}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
