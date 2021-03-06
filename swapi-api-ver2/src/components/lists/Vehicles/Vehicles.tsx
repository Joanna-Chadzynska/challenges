import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink, Card } from '../../shared';

const Vehicles: React.SFC = () => {
	const vehicles = useSelector((state: RootState) => state.vehicles);
	vehicles.sort((a, b) => (a.name > b.name ? 1 : -1));
	return (
		<CustomList name='Vehicles'>
			{vehicles.map((vehicle) => (
				<CustomLink endpoint='vehicles' id={vehicle.name} key={vehicle.name}>
					<Card name={vehicle.name} />
				</CustomLink>
			))}
		</CustomList>
	);
};

export default Vehicles;
