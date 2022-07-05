import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function updateDatapanel() {
	const { data: datapanels } = await axios.get(baseUrl + '/datapanel/datapanels');
	const formattedDataPanel = datapanels.map((c: any) => ({
		DataPanel_type: c.DataPanel_type,
		Data_title: c.Data_title, aftar: c.aftar
	}));
	console.table(formattedDataPanel);


	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const dataPanel = datapanels[index];

	const newDataPanel = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new DataPanel name or press enter to keep it as (${dataPanel.Data_title})`,
			filter: (val) => {
				if (val.trim() === '') return dataPanel.Data_title;
				return val;
			},
		},
		{
			type: 'input',
			name: 'type',
			message: `Enter new DataPanel type or press enter to keep it as (${dataPanel.DataPanel_type})`,
			filter: (val) => {
				if (val.trim() === '') return dataPanel.DataPanel_type;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/datapanel/${dataPanel.DataPanel_id}`, newDataPanel);

	console.log(`DataPanel for ${newDataPanel.Data_title}, has been updated ✅`);

	// const { data: service } = await axios.get(baseUrl + '/services');


}
