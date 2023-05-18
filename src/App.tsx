import About from './components/About'
import Header from './components/Header/Header'
import MainScreen from './components/MainScreen'
import Reasons from './components/Reasons'

function App() {
	return (
		<div className="text-white">
			<Header />
			<main className="relative">
				<MainScreen />
				<About />
				<div className="bg- absolute top-[740px] -z-10 h-[1300px] w-full bg-[url('./assets/curves.svg')] bg-cover bg-left-top bg-no-repeat" />
				<Reasons />
			</main>
		</div>
	)
}

export default App
