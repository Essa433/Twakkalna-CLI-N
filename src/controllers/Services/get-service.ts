import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


// export let services = [{ Service_id: '1234', title: 'ssass', type: 'sss', featured_services: false },
// { trueService_id: '2222', title: 'service', type: 'hi there', featured_services: true },
// { Service_id: '0000', title: 'noway', type: 'why come', featured_services: false },
// { Service_id: '1111', title: 'wynot', type: 'i am going', featured_services: true }
// ]

export async function getService() {
	const { data: service } = await axios.get(baseUrl + '/service/allservices');
	const formattedServices = service.map((c: any) => ({
		service_type: c.service_type,
		service_title: c.service_title, aftar: c.aftar, featured_service: c.featured_service
	}));
	console.table(formattedServices);

}