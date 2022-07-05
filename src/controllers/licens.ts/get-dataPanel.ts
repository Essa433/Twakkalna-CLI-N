import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


let identifications = [{ Identification_id: '1234', national_id: 'ssass', expireDate: 'sss' }]



export async function getiIdentification() {
	// const { data: service } = await axios.get(baseUrl + '/services');
	const formattedIdentification = identifications.map((c: any) => ({ title: c.title, type: c.type }));
	console.table(formattedIdentification);


}