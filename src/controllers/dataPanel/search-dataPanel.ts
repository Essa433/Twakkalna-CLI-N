import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';
import { getDataPanel } from './get-dataPanel';

let DataPanels = [{ id: '1234', title: 'ssass', type: 'sss' },
{ id: '2222', title: 'service', type: 'hi there' },
{ id: '0000', title: 'noway', type: 'why come' },
{ id: '1111', title: 'wynot', type: 'i am going' }]

export async function searchDataPanels() {
	const query = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter the Data name to search 🔤 ',
		},


	]);

	// const { data: contacts } = await axios.get(baseUrl + '/contacts', {
	// 	params: query,
	// });
	const formattedDataPanel = DataPanels.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedDataPanel);
}
