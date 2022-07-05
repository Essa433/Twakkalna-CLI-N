import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function searchServices() {
	const text = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter the service title to search 🔤 ',
		},


	]);

	const { data: services } = await axios.get(baseUrl + '/service/services', {
		params: text,
	});
	const formattedServices = services.map((c: any) => ({ service_title: c.service_title }));
	console.table(formattedServices);
}
