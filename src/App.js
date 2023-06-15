import './App.css';
import { useQuery, gql } from '@apollo/client';

export default function App() {
	return (
		<div>
			<h2>My first Apollo app 🚀</h2>
		</div>
	);
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
