import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';





export async function getiIdentification() {
	const { data: users } = await axios.get(baseUrl + '/users');
	const formattedIdentification = users.map((c: any) => ({

		email: c.email,
		name: c.name,
		age: c.age,
		role: c.role,
		nationalId: c.nationalId,
		password: c.password,
		date_birth: c.data_birth,
		phoneNumber: c.phoneNumber,
		place_birth: c.place_birth,
		nationality: c.nationality,
		blood_type: c.blood_type,
		marital_status: c.marital_status,
		gender: c.gender,
		photo: c.photo
	}));
	console.table(formattedIdentification);


}
