import { useState } from 'react';
import './App.css';

const convertToRem = (pxValue) => pxValue / 16;

function App() {
	const [px, setPx] = useState(16);
	const [rem, setRem] = useState(convertToRem(px));

	const handleChange = (event) => {
		setPx(event.target.value);
		setRem(convertToRem(event.target.value));
	};

	return (
		<div className='App'>
			<main className='main'>
				<h1 className='heading'>PX to REM</h1>
				<div className='input-wrapper'>
					<input
						type='number'
						className='input'
						value={px}
						onChange={handleChange}
					/>
					<input value={rem} contentEditable={false} className='input' />
				</div>
			</main>
		</div>
	);
}

export default App;
