import axios from 'axios';
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';
import { services } from './public-services.ts/puplic';


// let services = [{ Service_id: '1234', title: 'ssass', type: 'sss' },
// { Service_id: '2222', title: 'service', type: 'hi there' },
// { Service_id: '0000', title: 'noway', type: 'why come' },
// { Service_id: '1111', title: 'wynot', type: 'i am going' }]


export async function updateService() {
	const { data: services } = await axios.get(baseUrl + '/service/allservices');
	const formattedServices = services.map((c: any) => ({
		service_type: c.service_type,
		service_title: c.service_title, aftar: c.aftar, featured_service: c.featured_service
	}));
	console.table(formattedServices);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const service = services[index];

	const newService = await prompt([
		{
			type: 'input',
			name: 'service_title',
			message: `Enter new service title or press enter to keep it as (${service.service_title})`,
			filter: (val) => {
				if (val.trim() === '') return service.service_title;
				return val;
			},
		},
		{
			type: 'input',
			name: 'service_type',
			message: `Enter new service type or press enter to keep it as (${service.service_type})`,
			filter: (val) => {
				if (val.trim() === '') return service.service_type;
				return val;
			},
		},
	]);
	await axios.patch(baseUrl + `/service/${service.service_id}`, newService);

	console.log(chalk.bgGreenBright.green(`service for ${service.service_title}, has been updated ✅`));

}
