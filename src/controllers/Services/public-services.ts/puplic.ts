import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';


export let services = [{ ramzTwakalna: '.......................................................', },

]

export async function ramzTwakalna() {
    // const { data: service } = await axios.get(baseUrl + '/services');
    const formattedServices = services.map((c: any) => ({ ramzTwakalna: c.ramzTwakalna }));
    console.table(formattedServices);


}