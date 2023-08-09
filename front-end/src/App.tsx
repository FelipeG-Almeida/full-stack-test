/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CardComponent from './components/CardComponent.jsx';

function App() {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selected = event.target.files![0];
		if (selected) {
			setSelectedFile(selected);
		}
	};

	const fetchUsers = async () => {
		const fetchUsersResponse = await axios.get(
			`http://localhost:3000/api/users?q=${searchTerm}`
		);
		setUsers(fetchUsersResponse.data);
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

				fetchUsers();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (selectedFile) {
			handleUpload();
		}
	}, [selectedFile]);

	return (
		<main>
			<h1>
				Import Your <span>CSV</span> File
			</h1>
			<div>
				<label className="selectCSVButton" htmlFor="file">
					Select File
				</label>
				<input
					type="file"
					name="file"
					id="file"
					accept=".csv"
					onChange={handleFileChange}
				/>
			</div>
			{users.length > 0 && (
				<>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							fetchUsers();
						}}
						className="searchDiv"
					>
						<label htmlFor="q">Search Term:</label>
						<input
							type="text"
							id="q"
							name="q"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<input type="submit" value="Search" />
					</form>
					<div className="cardsDiv">
						{users.map((user, index) => {
							return <CardComponent key={index} props={user} />;
						})}
					</div>
				</>
			)}
		</main>
	);
}

export default App;
