import axios from 'axios';
import { prompt } from 'inquirer';


let datapanels = [{ id: '1234', title: 'ssass', type: 'sss' },
{ id: '2222', title: 'service', type: 'hi there' },
{ id: '0000', title: 'noway', type: 'why come' },
{ id: '1111', title: 'wynot', type: 'i am going' }]


export async function getDataPanel() {
	// const { data: service } = await axios.get(baseUrl + '/services');
	const formattedDataPanel = datapanels.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedDataPanel);


}