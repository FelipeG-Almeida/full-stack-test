# CSV Data Viewer

This web application allows users to load a CSV file with preformatted data and display the data as cards on the website. Users can also search for data within the loaded CSV file using a search bar.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Observations](#observations)

## Getting Started

### Prerequisites

To run this application, you need to have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/FelipeG-Almeida/full-stack-test.git
   cd full-stack-test
   ```

2. Install the dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

## Usage

### Frontend

1. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

2. Open your browser and navigate to [http://localhost:4000](http://localhost:4000) to access the frontend of the application.

3. Use the "Load CSV" button to load a CSV file from your local machine.

4. Enter search terms in the search bar to filter the displayed cards based on your search.

### Backend

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. The backend will run on [http://localhost:3000](http://localhost:3000).

3. Use the following endpoints:
   - `POST /api/files` to upload a CSV file.
   - `GET /api/users?q=<searchTerm>` to search through the loaded CSV data.

## Screenshots

Desktop:

![desktop](https://github.com/FelipeG-Almeida/full-stack-test/assets/73674044/c9f2cf3f-cb8d-4af9-9ca7-edbce2beb598)

Mobile:

<p align="center">
  <kbd>
    <img width="50%" src="https://github.com/FelipeG-Almeida/full-stack-test/assets/73674044/132fa69e-aa45-4bf2-8ed0-6a8512cc51bc" />
  </kbd>
</p>

## Technologies Used

- Frontend: React, TypeScript
- Backend: Node.js, Express, TypeScript
- Testing: Jest

## Testing

Here's the coverage from the project:

![coverage](https://github.com/FelipeG-Almeida/full-stack-test/assets/73674044/2c0c53f2-c8eb-4b0e-b8dc-5c467c98a486)

## Observations

Given the project instructions, I assumed that the CSV file would have the same structure as the provided example. As a result, I created a "mocked" database structure to match the given structure. However, it is entirely possible to add a bit more complexity and allow for any CSV with any number of columns to be provided.

