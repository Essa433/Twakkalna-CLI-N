import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';




export async function getFeaturedServices() {
    const { data: service } = await axios.get(baseUrl + '/service/featuredService');
    const formattedServices = service.map((c: any) => ({
        service_type: c.service_type,
        service_title: c.service_title, aftar: c.aftar, featured_service: c.featured_service
    }));
    // if(formattedServices == true)
    console.table(formattedServices);
}



