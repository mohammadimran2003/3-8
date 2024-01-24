import { useState } from 'react';
import { initialTravelPlan } from '../data';
import PlaceTree from './PlaceTree';

export default function TravelPlan() {
	const [plan, setPlan] = useState(initialTravelPlan);

	const root = plan[0];
	const planetIds = root.childIds;

	const handleComplete = (parentId, childId) => {
		const parent = plan[parentId];
		const nextParent = {
			...parent,
			childIds: parent.childIds.filter((id) => id !== childId),
		};
		setPlan({
			...plan,
			[parentId]: nextParent,
		});
	};

	return (
		<>
			<h2>Places to visit</h2>
			<ol>
				{planetIds.map((id) => (
					<PlaceTree
						key={id}
						id={id}
						placesById={plan}
						onComplete={handleComplete}
						parentId={0}
					/>
				))}
			</ol>
		</>
	);
}
