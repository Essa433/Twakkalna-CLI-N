import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';


export let user = [{ Pationt_name: 'Saad', Blood_type: 'O+', age: '23' },
{ Pationt_name: 'Waleed', Blood_type: 'AB', age: '25' },
{ Pationt_name: 'Mohammed', Blood_type: 'O-', age: '50' }
]

export async function tabara() {
    // const { data: user } = await axios.get(baseUrl + '/user');
    const formattedtabara = user.map((c: any) => ({ Pationt_name: c.Pationt_name, Blood_type: c.Blood_type, age: c.age }));
    console.table(formattedtabara);


}