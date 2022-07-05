import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';
// import { getDataPanel } from './get-dataPanel';

let identifications = [{ Identification_id: '1234', name: 'ssass', expireDate: 'sss' }]


export async function searchIdentification() {
	const query = await prompt([
		{
			type: 'input',
			national_id: 'national_id',
			message: 'Enter the national id to search 🔤 ',
		},


	]);

	// const { data: contacts } = await axios.get(baseUrl + '/contacts', {
	// 	params: query,
	// });
	const formattedIdentification = identifications.map((c: any) => ({ name: c.name, expireDate: c.expireDate }));
	console.table(formattedIdentification);
}
