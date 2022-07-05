import axios from 'axios';
import { ObjectId } from 'bson';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createService() {

	const serviceData = await prompt([
		{
			type: 'input',
			name: 'service_title',
			message: 'Enter service title 🔤 ',
		},
		{
			type: 'input',
			name: 'service_type',
			message: 'Enter service type 📱 ',
		},
		{
			type: 'input',
			name: 'aftar',
			message: 'Enter service aftar 📱 ',
		},
		{
			type: 'input',
			name: 'featured_service',
			message: 'Enter service featured_service 📱 ',
		}

	]);

	await axios.post(baseUrl + '/service/services', {
		service_id: new ObjectId().toHexString(),
		...serviceData,
	});

	console.log(`Service for ${serviceData.title}, has been added ✅`);
}
