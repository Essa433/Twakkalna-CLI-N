import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

let identifications = [{ Identification_id: '1234', national_id: 'ssass', expireDate: 'sss' }]

export async function deleteIdentification() {
	// const { data: service } = await axios.get(baseUrl + '/services');
	const formattedDataPanel = identifications.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedDataPanel);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const Identification = identifications[index];
	// await axios.delete(baseUrl + `/contacts/${contact.id}`);
	console.log(`DataPanel for ${Identification.national_id} has been deleted ✅`);
}