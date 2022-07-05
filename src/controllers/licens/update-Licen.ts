import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


let licens = [{ licen_id: '1234', national_id: 'ssass', expireDate: 'sss' }]



export async function updateLicen() {
	// const { data: services } = await axios.get(baseUrl + '/contacts');
	const formattedIdentification = licens.map((c: any) => ({ licen_id: c.licen_id, name: c.name }));
	console.table(formattedIdentification);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const Licen = licens[index];

	const newLicen = await prompt([
		{
			type: 'input',
			name: 'licen id',
			message: `Enter new Licen id or press enter to keep it as (${Licen.licen_id})`,
			filter: (val) => {
				if (val.trim() === '') return Licen.licen_id;
				return val;
			},
		},
		{
			type: 'input',
			name: 'name',
			message: `Enter new national id or press enter to keep it as (${Licen.national_id})`,
			filter: (val) => {
				if (val.trim() === '') return Licen.national_id;
				return val;
			},
		},
	]);

	// await axios.patch(baseUrl + `/contacts/${contact.id}`, newContact);

	console.log(`DataPanel for ${newLicen.national_id}, has been updated ✅`);

	// const { data: service } = await axios.get(baseUrl + '/services');


}
