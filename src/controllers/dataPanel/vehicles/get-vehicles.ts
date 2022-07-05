import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';


export let services = [{ Service_id: '1234', title: 'ssass', type: 'sss', featured_services: false },
{ trueService_id: '2222', title: 'service', type: 'hi there', featured_services: true },
{ Service_id: '0000', title: 'noway', type: 'why come', featured_services: false },
{ Service_id: '1111', title: 'wynot', type: 'i am going', featured_services: true }
]

export async function getVehicles() {
    // const { data: service } = await axios.get(baseUrl + '/services');
    const formattedServices = services.map((c: any) => ({ title: c.title, type: c.type }));
    console.table(formattedServices);


}