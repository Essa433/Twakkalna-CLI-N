import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

let licens = [{ licen_id: '1234', national_id: 'ssass', expireDate: 'sss' }]

export async function deleteLicen() {
	// const { data: service } = await axios.get(baseUrl + '/services');
	const formattedDataPanel = licens.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedDataPanel);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const Licen = licens[index];
	// await axios.delete(baseUrl + `/contacts/${contact.id}`);
	console.log(`DataPanel for ${Licen.national_id} has been deleted ✅`);
}