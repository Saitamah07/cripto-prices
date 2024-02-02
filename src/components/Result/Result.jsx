const Result = ({ result }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		result;
	return (
		<div className='text-white font-["Onest_Variable"] flex items-center gap-4 mt-8'>
			<img
				className='block w-[170px]'
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt='cripto img'
			/>
			<div>
				<p className='text-xl'>
					El precio Es de: <span className='font-bold'>{PRICE}</span>
				</p>
				<p className='text-md'>
					Precio mas alto del día:{' '}
					<span className='font-bold'>{HIGHDAY}</span>
				</p>
				<p className='text-md'>
					Precio más bajo del día:{' '}
					<span className='font-bold'>{LOWDAY}</span>
				</p>
				<p className='text-md'>
					Variación Ultimas 24 horas:{' '}
					<span className='font-bold'>{CHANGEPCT24HOUR}</span>
				</p>
				<p className='text-md'>
					Ultima Actualización:{' '}
					<span className='font-bold'>{LASTUPDATE}</span>
				</p>
				<p className='text-md'>
					El precio Es de: <span className='font-bold'>{PRICE}</span>
				</p>
			</div>
		</div>
	);
};

export default Result;
