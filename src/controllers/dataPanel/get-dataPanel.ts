import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


// let datapanels = [{ id: '1234', title: 'ssass', type: 'sss' },
// { id: '2222', title: 'service', type: 'hi there' },
// { id: '0000', title: 'noway', type: 'why come' },
// { id: '1111', title: 'wynot', type: 'i am going' }]


export async function getDataPanel() {
	const { data: datapanels } = await axios.get(baseUrl + '/datapanel/datapanels');
	const formattedDataPanel = datapanels.map((c: any) => ({
		DataPanel_type: c.DataPanel_type,
		Data_title: c.Data_title, aftar: c.aftar
	}));
	console.table(formattedDataPanel);


}