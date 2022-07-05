import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';





export async function getProfile() {
	const { data: users } = await axios.get(baseUrl + '/users/users');
	const formattedIdentification = users.map((c: any) => ({
		name: c.name,
		age: c.age,
		nationalId: c.nationalId,
		date_birth: c.date_birth,
		place_birth: c.place_birth,
		nationality: c.nationality,
		blood_type: c.blood_type,
		marital_status: c.marital_status,
		gender: c.gender,
		photo: c.photo
	}));
	console.table(formattedIdentification);


}
