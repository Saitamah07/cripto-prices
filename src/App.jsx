import { useState, useEffect } from 'react';
import '@fontsource-variable/onest';
import criptosImg from './imgs/criptos.png';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import Spinner from './components/Spinner/Spinner';
import './index.css';

function App() {
	const [coins, setCoins] = useState({});
	const [result, setResult] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (Object.keys(coins).length > 0) {
			const criptoPrices = async () => {
				setLoading(true);
				setResult({});
				const { coin, criptocoin } = coins;
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`;

				const response = await fetch(url);
				const result = await response.json();

				setResult(result.DISPLAY[criptocoin][coin]);

				setLoading(false);
			};
			criptoPrices();
		}
	}, [coins]);

	return (
		<div className='max-w-[1000px] mx-auto my-0 w-[90%] grid md:grid-cols-2 md:gap-x-8 '>
			<img
				className='max-w-[400px] w-4/5 ml-auto mr-auto my-auto block'
				src={criptosImg}
				alt='Cripto IMGS'
			/>
			<div>
				<h1 className='font-["Onest_Variable"] text-white text-center font-black mt-24 mb-20 text-5xl '>
					Cotiza Criptomonedas
				</h1>
				<Form setCoins={setCoins} />
				{loading && <Spinner />}
				{result.PRICE && <Result result={result} />}
			</div>
		</div>
	);
}

export default App;
