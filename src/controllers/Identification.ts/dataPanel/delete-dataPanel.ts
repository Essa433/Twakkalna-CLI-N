import axios from 'axios';
import { prompt } from 'inquirer';

let dataPanels = [{ Service_id: '1234', title: 'ssass', type: 'sss' }]

export async function deleteDataPanel() {
	// const { data: service } = await axios.get(baseUrl + '/services');
	const formattedDataPanel = dataPanels.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedDataPanel);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const dataPanel = dataPanels[index];
	// await axios.delete(baseUrl + `/contacts/${contact.id}`);
	console.log(`DataPanel for ${dataPanel.title} has been deleted ✅`);
}