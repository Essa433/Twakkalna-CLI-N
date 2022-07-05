import { prompt } from 'inquirer';
import { getiIdentification } from '../../controllers/Identification.ts/get-identification';
// import { getiIdentification } from '../../controllers/Identification.ts/get-identification';
import { getFeaturedServices } from '../../controllers/Services/featured-service';
import { getService } from '../../controllers/Services/get-service';
import { searchServices } from '../../controllers/Services/search-service';
import { q5 } from '../q5-admindash';
import { q7 } from '../q7-userDash';
import { q18 } from './q18-driveing-licens';
import { q6 } from './q6-identification';


export async function q20() {
    const { q20Answer } = await prompt({
        type: 'list',
        name: 'q20Answer',
        message: 'hello to twakkalna homepage !',
        choices: [
            '1- View Identification Id ',
            '2- View driving Licens',
            '3- View vihecial',
            '4- Education Decument 🔍',
            '5- go back',
            '6- Quit app 🤬'


        ],
        filter: (val) => +val[0],
    });

    switch (q20Answer) {
        case 1:
            await getiIdentification();
            break;

        case 2:
            await q18();
            break;

        // case 3:
        //     await getService();
        //     break;

        // case 4:
        //     await searchServices();
        //     break;

        case 5:
            console.log('go back');
            return q7();

        case 6:
            console.log('Byyyye and see you soon!');
            process.exit(0);



        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }

