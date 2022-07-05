import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function getiIdentification() {
    const { data: user } = await axios.get(baseUrl + '/users');
    const formattedIdentification = user.map((c: any) => ({
        nationalId: c.nationalId, date_birth: c.date_birth,
        place_birth: c.place_birth, nationality: c.nationality
    }));
    console.table(formattedIdentification);


}