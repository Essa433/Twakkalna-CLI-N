import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function deleteDataPanel() {
	const { data: datapanels } = await axios.get(baseUrl + '/datapanel/datapanels');
	const formattedDataPanel = datapanels.map((c: any) => ({
		DataPanel_type: c.DataPanel_type,
		Data_title: c.Data_title, aftar: c.aftar
	}));

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const datapanel = datapanels[index];
	await axios.delete(baseUrl + `/datapanel/${datapanel.DataPanel_id}`);
	console.log(`DataPanel for ${datapanel.Data_title} has been deleted ✅`);
}