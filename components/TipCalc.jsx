import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [error, setError] = useState(false);

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
    const val = parseInt(value, 10);
    setPeople(value);
    setError(val === 0);
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

  const reset = () => {
    setBill('');
    setTipPercent(null);
    setCustomTip('');
    setPeople('');
    setError(false);
  };

  const { tipAmount, total } = calculateTip();

  return (
    <div className="flex flex-col items-center min-h-screen bg-cyan-100 py-10 px-4">
      <h1 className="text-xl tracking-widest text-center mb-10 font-mono">SPLITTER</h1>
      <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Bill</label>
            <input
              type="text"
              className="w-full p-2 rounded-md border border-cyan-400 text-right"
              value={bill}
              onChange={handleBillChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Select Tip %</label>
            <div className="grid grid-cols-3 gap-2">
              {tipOptions.map((tip) => (
                <button
                  key={tip}
                  onClick={() => handleTipClick(tip)}
                  className={`p-2 rounded-md font-bold text-white transition ${
                    tipPercent === tip ? 'bg-cyan-300 text-cyan-900' : 'bg-cyan-900 hover:bg-cyan-700'
                  }`}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="text"
                placeholder="Custom"
                className="col-span-1 p-2 rounded-md border border-cyan-400 text-right appearance-none"
                value={customTip}
                onChange={handleCustomTipChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Number of People</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className={`w-full p-2 rounded-md border text-right appearance-none ${
                error ? 'border-red-500' : 'border-cyan-400'
              }`}
              value={people}
              onChange={handlePeopleChange}
            />
            {error && <p className="text-red-500 text-xs mt-1">Can't be zero</p>}
          </div>
        </div>

        <div className="flex-1 bg-cyan-900 text-white p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm">Tip Amount</p>
                <p className="text-xs text-cyan-300">/ person</p>
              </div>
              <p className="text-2xl">${tipAmount}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Total</p>
                <p className="text-xs text-cyan-300">/ person</p>
              </div>
              <p className="text-2xl">${total}</p>
            </div>
          </div>
          <button
            onClick={reset}
            className="mt-6 p-2 rounded-md bg-cyan-300 text-cyan-900 font-bold hover:bg-cyan-200"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}