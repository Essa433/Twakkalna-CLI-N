import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createLicens() {

	const licenData = await prompt([
		{
			type: 'input',
			name: 'Input user licen_id',
			message: 'Enter licen_id 🔤 ',
		},

		{
			type: 'input',
			name: 'Name',
			message: 'Enter user name 🔤 ',
		},

		{
			type: 'input',
			name: 'licen expire date',
			message: 'Enter drive licen expire date 📱 ',
		},
	]);

	// await axios.put(baseUrl + '/services', {
	// 	id: v4(),
	// 	...serviceData,
	// });

	console.log(`Service for ${licenData.title}, has been added ✅`);
}
