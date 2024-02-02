import { useState } from 'react';

const useSelectCoins = (label, options) => {
	const [state, setState] = useState('');

	const SelectCoins = () => (
		<>
			<label className='text-white block font-["Onest_Variable"] text-xl  font-bold mx-0 my-4'>
				{label}
			</label>
			<select
				className='w-full text-xl p-4 rounded-xl'
				value={state}
				onChange={(e) => setState(e.target.value)}
			>
				<option value=''>Seleccion</option>

				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</>
	);

	return [state, SelectCoins];
};

export default useSelectCoins;
