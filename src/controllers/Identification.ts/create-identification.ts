import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createIdentification() {

	const IdenData = await prompt([
		{
			type: 'input',
			name: 'National Id',
			message: 'Enter National Id 🔤 ',
		},

		{
			type: 'input',
			name: 'Name',
			message: 'Enter user name 🔤 ',
		},

		{
			type: 'input',
			name: 'identification_Expire_Date',
			message: 'Enter identification Expire Date 📱 ',
		},
	]);

	// await axios.put(baseUrl + '/services', {
	// 	id: v4(),
	// 	...serviceData,
	// });

	console.log(`Service for ${IdenData.title}, has been added ✅`);
}
