import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createDataPanel() {

	const DataPanelData = await prompt([
		{
			type: 'input',
			name: 'Data_title',
			message: 'Enter data panel title 🔤 ',
		},
		{
			type: 'input',
			name: 'DataPanel_type',
			message: 'Enter data panele type ',
		},
		{
			type: 'input',
			name: 'aftar',
			message: 'Enter aftar 📱 ',
		},
	]);

	// await axios.put(baseUrl + '/services', {
	// 	id: v4(),
	// 	...serviceData,
	// });

	console.log(`DataPanel for ${DataPanelData.title}, has been added ✅`);
}
