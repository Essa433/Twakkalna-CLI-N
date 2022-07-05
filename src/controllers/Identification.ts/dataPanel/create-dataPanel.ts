import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';

export async function createDataPanel() {

	const DataPanelData = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter service title 🔤 ',
		},
		{
			type: 'input',
			name: 'type',
			message: 'Enter service type 📱 ',
		},
	]);

	// await axios.put(baseUrl + '/services', {
	// 	id: v4(),
	// 	...serviceData,
	// });

	console.log(`DataPanel for ${DataPanelData.title}, has been added ✅`);
}
