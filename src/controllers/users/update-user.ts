import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


let identifications = [{ Identification_id: '1234', name: 'ssass', expireDate: 'sss' }]



export async function updateIdentification() {
	// const { data: services } = await axios.get(baseUrl + '/contacts');
	const formattedIdentification = identifications.map((c: any) => ({ Identification_id: c.Identification_id, name: c.name }));
	console.table(formattedIdentification);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const identification = identifications[index];

	const newIdentification = await prompt([
		{
			type: 'input',
			name: 'Identification_id',
			message: `Enter new identification_id or press enter to keep it as (${identification.Identification_id})`,
			filter: (val) => {
				if (val.trim() === '') return identification.Identification_id;
				return val;
			},
		},
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${identification.name})`,
			filter: (val) => {
				if (val.trim() === '') return identification.name;
				return val;
			},
		},
	]);

	// await axios.patch(baseUrl + `/contacts/${contact.id}`, newContact);

	console.log(`DataPanel for ${newIdentification.title}, has been updated ✅`);

	// const { data: service } = await axios.get(baseUrl + '/services');


}
