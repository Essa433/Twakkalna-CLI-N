import axios from 'axios';
import chalk from 'chalk';
import { channel } from 'diagnostics_channel';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function deleteService() {
	const { data: services } = await axios.get(baseUrl + '/service/allservices');
	const formattedServices = services.map((c: any) => ({
		service_type: c.service_type,
		service_title: c.service_title, aftar: c.aftar, featured_service: c.featured_service
	}));
	console.table(formattedServices);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const service = services[index];
	await axios.delete(baseUrl + `/service/${service.service_id}`);
	console.log(chalk.bgRedBright.red(`Service for ${service.service_title} has been deleted `));
}