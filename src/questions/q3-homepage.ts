import { prompt } from 'inquirer';
import { getiIdentification } from '../controllers/Identification.ts/get-identification';
import { getProfile } from '../controllers/profiles/get-profiles';
import { getFeaturedServices } from '../controllers/Services/featured-service';
import { getService } from '../controllers/Services/get-service';
import { searchServices } from '../controllers/Services/search-service';
import { q7 } from './q7-userDash';


export async function q3() {
    const { q3Answer } = await prompt({
        type: 'list',
        name: 'q3Answer',
        message: 'hello to twakkalna homepage !',
        choices: [
            '1- View Identification Id ',
            '2- View Featured service 🐊',
            '3- View service 🐬',
            '4- Search service by name 🔍',
            '5- View Profile',
            '6- go back',
            '7- Quit app 🤬'


        ],
        filter: (val) => +val[0],
    });

    switch (q3Answer) {
        case 1:
            await getiIdentification();
            break;

        case 2:
            await getFeaturedServices();
            break;

        case 3:
            await getService();
            break;

        case 4:
            await searchServices();
            break;

        case 5:
            await getProfile();
            break;

        case 6:
            console.log('go back');
            return q7();

        case 7:
            console.log('Byyyye and see you soon!');
            process.exit(0);



        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }

