
import cupImg from '@/assets/cup.png'
import roubleIcon from '@/assets/icons/rouble.png'
import starIcon from '@/assets/icons/star.svg'

const MainScreen = () => {
	return (
		<section className="relative mx-auto flex max-w-header flex-col gap-10 px-layout pb-20 pt-6 md:flex-row md:items-center md:pt-12 xl:pb-44">
			<div>
				<div className="relative max-w-xl">
					<h1 className="max-w-[530px] text-4xl font-bold sx:text-5xl lg:text-6xl lg:leading-[70px] xl:text-6.5xl">
						Летний чемпионат <br className="hidden sx:block" /> по финансовым
						играм
					</h1>
					<div className="absolute bottom-0 left-32 translate-y-1/2 lg:left-44 lg:translate-y-1/3">
						<img src={roubleIcon} alt="Рубль" />
					</div>
				</div>
				<div className="mt-16 flex max-w-sm flex-col gap-8 lg:flex-center lg:max-w-none lg:flex-row xl:gap-28">
					<div className="flex h-max max-w-sm flex-wrap gap-2">
						<div className="label flex-1">май-август 2023 г.</div>
						<div className="label w-1/3 2sx:w-44">г. Хабаровск</div>
						<div className="label w-full">для школьников 8-18 лет</div>
					</div>
					<div className="text-2xl font-bold leading-[30px] sm:text-3.5xl lg:max-w-xs xl:max-w-sm">
						Прокачай свои знания по финансовой грамотности
					</div>
				</div>
			</div>
			<div className="max-w-md md:absolute md:-right-24 md:max-w-none lg:-right-12">
				<div className="relative">
					<img
						src={cupImg}
						alt="Кубок"
						className="z-10 mx-auto w-5/6 md:mx-0 lg:w-full"
					/>
					<img
						className="absolute left-10 top-0 z-10 w-16 md:-top-10 md:right-1/4 md:w-max lg:left-0 lg:top-4 lg:-translate-x-1/2"
						src={starIcon}
						alt="Звезда"
					/>
					<div className="absolute left-1/2 top-1/2 -z-10 h-full w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4415FF80] bg-opacity-50 blur-[83px]" />
				</div>
			</div>
		</section>
	)
}

export default MainScreen
