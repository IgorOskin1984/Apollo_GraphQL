import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_DOGS = gql`
query GetDogs {
	dogs {
		id
		breed
	}
}
`;
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;


export function Dogs() {
	const { loading, error, data } = useQuery(GET_DOGS);
	const [breed, setBreed] = useState('')


	const onDogSelected = (e) => {
		setBreed(e.currentTarget.value);
	}


	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;


	return (<>
		<select name='dog' onChange={onDogSelected}>
			{data.dogs.map((dog) => (
				<option key={dog.id} value={dog.breed}>
					{dog.breed}
				</option>
			))}
		</select>
		<DogPhoto breed={breed} />
	</>
	);
}

function DogPhoto({ breed }) {
	const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
		variables: { breed },
	});

	const handleRefetch = () => {
		refetch({ breed: 'dalmatian' });
	};

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div>
			<img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
			<button onClick={handleRefetch}>
				Refetch new breed!
			</button>
		</div>
	);
}