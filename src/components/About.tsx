import roubleIcon from '@/assets/icons/rouble_big.png'
import starYellowIcon from '@/assets/icons/star.svg'
import starWhiteIcon from '@/assets/icons/star_white.svg'

import { aboutCircleImgsData } from '@/data/aboutCircleImgs.data'

const About = () => {
	return (
		<section id="about" className="relative px-layout pb-20">
			{/* Background blured circle */}
			<div className="absolute right-28 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4415FF80] bg-opacity-50 blur-[83px]" />
			{/* Block */}
			<div className="relative mx-auto max-w-[1216px] rounded-4xl bg-blue p-4 pb-12 sm:p-8 sm:pb-16 md:px-12 md:pb-[73px] md:pt-11">
				<img
					className="translate absolute right-0 top-0 -translate-y-1/3 translate-x-1/3"
					src={starWhiteIcon}
					alt="Звезда Белая"
				/>
				<img
					className="absolute bottom-0 left-0 w-14 -translate-x-1/3 translate-y-1/3 lg:w-[unset]"
					src={starYellowIcon}
					alt="Звезда Желтая"
				/>
				<img
					className="absolute bottom-0 right-0 w-40 translate-x-1/3 translate-y-1/2 lg:w-[unset] lg:translate-x-1/2 lg:translate-y-1/3"
					src={roubleIcon}
					alt="Рубль"
				/>
				<div className="label-transparent">о чемпионате</div>

				<div className="flex flex-col justify-between gap-x-3 gap-y-6 md:flex-row">
					<div className="about">
						<h3 className="mt-4 text-3xl font-bold sm:text-5xl md:text-3.5xl lg:text-5xl">
							Что такое <br className="hidden md:block" /> чемпионат
							<br className="hidden md:block" /> по финансовым
							<br className="hidden md:block" /> играм?
						</h3>
						<p className="about__text">
							Летний чемпионат по финансовым играм - это уникальная возможность
							повысить свои знания и навыки по финансовой грамотности. Чемпионат
							проводится в формате увлекательных настольных игр.
						</p>
					</div>
					<div className="about">
						<div className="ml-8 flex">
							{aboutCircleImgsData.map((item) => (
								<img
									key={item.href}
									src={item.href}
									alt={item.alt}
									className="-ml-8 w-20 rounded-full border-[3px] border-white sx:w-28 lg:w-36 xl:w-[unset]"
								/>
							))}
						</div>
						<p className="about__text">
							Для участия в чемпионате не требуется специальных навыков и
							знаний.
							<br />
							Изучать и закреплять знания по финансовой грамотности участники
							будут прямо во время турнира.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
