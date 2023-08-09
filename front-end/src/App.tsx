/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selected = event.target.files![0];
		if (selected) {
			setSelectedFile(selected);
		}
	};

	const handleUpload = async () => {
		try {
			if (selectedFile) {
				const formData = new FormData();
				formData.append('file', selectedFile);

				const response = await axios.post(
					'http://localhost:3000/api/files',
					formData
				);
				console.log(response);
				setSelectedFile(null);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (selectedFile) {
			console.log(selectedFile);
			handleUpload();
		}
	}, [selectedFile]);

	return (
		<main>
			<h1>
				Import Your <span>CSV</span> File
			</h1>
			<div>
				<label htmlFor="file">Select File</label>
				<input
					type="file"
					name="file"
					id="file"
					accept=".csv"
					onChange={handleFileChange}
				/>
			</div>
		</main>
	);
}

export default App;
