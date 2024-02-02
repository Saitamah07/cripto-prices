import { useEffect, useState } from 'react';
import useSelectCoins from '../../hooks/useSelectCoins';
import { coins } from '../../data/coins';
import Error from '../Error/Error';

const Form = ({ setCoins }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	const [coin, SelectCoins] = useSelectCoins('Elige Tu Moneda', coins);
	const [criptocoin, SelectCriptocoin] = useSelectCoins(
		'Elige Tu Criptomoneda',
		criptos
	);

	useEffect(() => {
		const consultAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD';
			const response = await fetch(url);
			const result = await response.json();

			const arrayCriptos = result.Data.map((cripto) => {
				const object = {
					id: cripto.CoinInfo.Name,
					name: cripto.CoinInfo.FullName,
				};
				return object;
			});
			setCriptos(arrayCriptos);
		};
		consultAPI();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([coin, criptocoin].includes('')) {
			setError(true);
			return;
		}

		setError(false);
		setCoins({
			coin,
			criptocoin,
		});
	};

	return (
		<>
			{error && <Error>Todos los campons son obligatorios</Error>}
			<form onSubmit={handleSubmit}>
				<SelectCoins />
				<SelectCriptocoin />
				<input
					className='bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-900 cursor-pointer rounded-xl w-full p-3 text-white font-extrabold uppercase text-xl mt-6 '
					type='submit'
					value='Cotizar'
				/>
			</form>
		</>
	);
};

export default Form;
