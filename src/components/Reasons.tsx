import Divider from '@/ui/Divider'

import { reasonsData } from '@/data/reasons.data'

const Reasons = () => {
	return (
		<section className="px-layout">
			<div className="mx-auto max-w-[1205px]">
				<div className="label-transparent mx-auto">для чего</div>
				<h2 className="mb-7 mt-6">Зачем участвовать в чемпионате?</h2>
				<Divider />
				<div className="mt-9 grid gap-4 md:grid-cols-2 md:grid-rows-2 ">
					{reasonsData.map((item) => (
						<div
							key={item.title}
							className="rounded-[35px] bg-purple p-6 pr-3 lg:pb-14 lg:pl-16 lg:pt-10 [&>div>h4]:last:h-[unset] [&>div>h4]:last:max-w-xs"
						>
							<div className="flex flex-col-reverse justify-between gap-8 sx:flex-row md:flex-col-reverse lg:flex-row">
								<h4 className="md:h-16 lg:h-32 lg:max-w-[250px] ">
									{item.title}
								</h4>
								<div className="w-24 md:w-[unset]">
									<img src={item.img} alt={`Иконка "${item.title}"`} />
								</div>
							</div>
							<p className="mt-6 text-base leading-7 tracking-[0.5px] md:max-w-[400px]">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Reasons
