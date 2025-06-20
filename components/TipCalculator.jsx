import { useState } from 'react';
import TipBtn from './TipBtn';
import ResetBtn from "./ResetBtn"

export default function TipCalculator() {
	
	const [bill, setBill] = useState('');
	const [tipPercent, setTipPercent] = useState(null);
	const [customTip, setCustomTip] = useState('');
	const [people, setPeople] = useState('');

	const tipOptions = [5, 10, 15, 25, 50];

	const handleTipClick = (percent) => {
		setTipPercent(percent);
    	setCustomTip('');
	};

	const formatDecimalInput = (value) => {
		// Allow only digits and one dot or comma
		const cleaned = value.replace(/[^\d.,]/g, '');
		const parts = cleaned.split(/[.,]/);
		if (parts.length === 1) return parts[0];
		return parts[0] + '.' + parts.slice(1).join('');
	};

	const handleBillChange = (e) => {
		setBill(formatDecimalInput(e.target.value));
	};

	const handleCustomTipChange = (e) => {
		setCustomTip(formatDecimalInput(e.target.value));
		setTipPercent(null);
	};

	const handlePeopleChange = (e) => {
		const value = e.target.value.replace(/[^\d]/g, '');
		setPeople(value);
	};

	const parseInput = (input) => {
		const normalized = input.replace(',', '.');
		const parsed = parseFloat(normalized);
		return isNaN(parsed) ? 0 : parsed;
	};

	const calculateTip = () => {
		const billValue = parseInput(bill);
		const tipValue = tipPercent !== null ? tipPercent : parseInput(customTip);
		const peopleCount = parseInt(people, 10);
		if (!billValue || !tipValue || !peopleCount) return { tipAmount: 0, total: 0 };
		const tip = (billValue * (tipValue / 100)) / peopleCount;
		const total = billValue / peopleCount + tip;
		return {
			tipAmount: tip.toFixed(2),
			total: total.toFixed(2),
		};
	};

	{/* reinicia todos os useState */}
	const handleReset = () => {
		setBill('');
		setTipPercent(null);
		setCustomTip('');
		setPeople('');
		setError(false);
	};


	{/* toda funcao que depende de outro useState não precisa ser necessariamente um useState,
		nesse caso, toda vez que um dos três valores de useState são atualizados, o componente renderiza de novo
		e roda as funções abaixo */}
	const { tipAmount, total } = calculateTip();
	
	const error = parseInt(people) === 0;

	return (
		<div className="flex flex-col bg-white p-8 rounded-t-3xl md:rounded-3xl md:shadow-lg  max-w-112 md:max-w-188 md:flex-row gap-8">
	
			{/* left screen */}
			<div className="md:w-5/10 flex flex-col gap-8">

				<div className="flex flex-col gap-3">
					<span className="text-sm text-custom-grey-500">Bill</span>
					<input type="text" placeholder="1.00" className="w-full bg-custom-grey-50 focus:outline-none p-2 rounded-md border border-custom-grey-50
					focus:border-blue-400 text-right" value={bill} onChange={handleBillChange}/>
				</div>

				<div className="flex flex-col gap-3">
					<span className="text-sm text-custom-grey-500 ">Select Tip %</span>
					<div className="grid grid-cols-3 gap-2">
						{tipOptions.map((tip) => (
							<TipBtn key={tip} onClick={() => handleTipClick(tip)} colors={tipPercent === tip ? 'bg-custom-green-400 text-custom-green-900' : 'bg-cyan-900 text-white'}>{tip}%</TipBtn>
						))}

					<input type="text" placeholder="Custom" className="col-span-1 p-2 rounded-md border border-custom-grey-50 bg-custom-grey-50  
						focus:outline-none focus:border-blue-400 text-right appearance-none" value={customTip} onChange={handleCustomTipChange}/>
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<div className="flex justify-between">
						<span className="text-custom-grey-500 text-sm">Number of People </span>
						{error && <p className="text-red-400 text-xs">Can't be zero</p>}
					</div>

					<input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="0" className={ `bg-custom-grey-50 focus:outline-none w-full p-2 rounded-md 
						border text-right appearance-none ${error ? 'border-red-400' : 'border-custom-grey-50 focus:border-blue-400'}`} value={people}
						onChange={handlePeopleChange} />
				</div>

			</div>

			{/* right screen */}
			<div className="md:w-5/10 bg-custom-green-900 text-white p-8 md:p-12 rounded-2xl flex flex-col gap-8 justify-between">

				<div className="flex flex-col gap-6">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<span className="text-sm">Tip Amount</span>
							<span className="text-xs text-custom-grey-400">/ person</span>
						</div>
						<span className="text-3xl text-custom-green-400">${tipAmount}</span>
					</div>

					<div className="flex justify-between">
						<div className="flex flex-col">
							<span className="text-sm">Total</span>
							<span className="text-xs text-custom-grey-400">/ person</span>
						</div>
						<span className="text-3xl text-custom-green-400">${total}</span>
					</div>
				</div>

				
				<ResetBtn onClick={() => handleReset()}>RESET</ResetBtn>

			</div>
		</div>
	);
	}