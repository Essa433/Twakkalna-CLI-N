import { prompt } from 'inquirer';
import { createDataPanel } from '../../controllers/dataPanel/create-dataPanel';
import { deleteDataPanel } from '../../controllers/dataPanel/delete-dataPanel';
import { getDataPanel } from '../../controllers/dataPanel/get-dataPanel';
import { searchDataPanels } from '../../controllers/dataPanel/search-dataPanel';
import { updateDatapanel } from '../../controllers/dataPanel/update-dataPanel';
import { q5 } from '../q5-admindash';


export async function q4() {
    const { q4Answer } = await prompt({
        type: 'list',
        name: 'q4Answer',
        message: 'Please choose one!',
        choices: [
            '1- View Data Panel ',
            '2- Add new Data Panel 🐊',
            '3- Update Data Panel 🐬',
            '4- Delete Data Panel ❌',
            '5- Search for one data by data name 🔍',
            '6- Quit app 🤬',
            '7- go back'


        ],
        filter: (val) => +val[0],
    });

    switch (q4Answer) {
        case 1:
            await getDataPanel();
            break;

        case 2:
            await createDataPanel();
            break;

        case 3:
            await updateDatapanel();
            break;

        case 4:
            await deleteDataPanel();
            break;

        case 5:
            await searchDataPanels();
            break;

        case 6:
            console.log('Byyyye and see you soon!');
            process.exit(0);

        case 7:
            console.log();
            return q5();

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }

