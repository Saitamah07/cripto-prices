const Result = ({ result }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		result;
	return (
		<div className='text-white font-["Onest_Variable"] flex items-center gap-4 mt-8 bg-gray-800 rounded-lg shadow-md'>
			<img
				className='block w-[160px]'
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt='cripto img'
			/>
			<div>
				<p className='text-lg m-2'>
					El Precio Es de:{' '}
					<span className='font-bold text-blue-400'>{PRICE}</span>
				</p>
				<p className='text-lg m-2'>
					Pico Maximo Hoy:{' '}
					<span className='font-bold text-green-400'>{HIGHDAY}</span>
				</p>
				<p className='text-lg m-2'>
					Precio Minimo Hoy:{' '}
					<span className='font-bold text-red-400'>{LOWDAY}</span>
				</p>
				<p className='text-lg m-2'>
					Variación en 24 horas:{' '}
					<span className='font-bold text-yellow-400'>
						{CHANGEPCT24HOUR}
					</span>
				</p>
				<p className='text-lg m-2'>
					Ultima Actualización:{' '}
					<span className='font-bold text-gray-400'>
						{LASTUPDATE}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Result;
