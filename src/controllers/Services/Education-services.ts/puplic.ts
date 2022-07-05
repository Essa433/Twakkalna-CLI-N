import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';


export let childGrad = [{ Student_name: 'Essa', Grade: '96%' },
{ Student_name: 'Saleh', Grade: '72%' }
]

export async function cheldrenGrade() {
    // const { data: digitalwallet } = await axios.get(baseUrl + '/services');
    const formattedServices = childGrad.map((c: any) => ({ Student_name: c.Student_name, Grade: c.Grade }));
    console.table(formattedServices);


}