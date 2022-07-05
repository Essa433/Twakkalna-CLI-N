// import { chalk } from "chalk";
import axios from 'axios';
import { prompt } from 'inquirer';
import { resolve } from 'path';
import { baseUrl } from '../.';


export async function q1() {
    const { q1Answer } = await prompt({
        type: 'list',
        name: 'q1Answer',
        message: 'Please login or quit !',
        choices: ['Login', 'Quit'],
        filter: (val) => val.toLowerCase(),
    });

    if (q1Answer === 'quit') {
        console.log('you can`t login ');
        process.exit(0);
    }

    const { nationalId, password } = await prompt([
        {
            type: 'input',
            name: 'nationalId',
            message: 'Enter your Intarnational Id  ',
            filter: (val) => val.toLowerCase(),
        },
        {
            type: 'input',
            name: 'password',
            message: 'Enter your password  ',
        },
    ]);


    const { data } = await axios.post(baseUrl + '/login', {
        nationalId: nationalId,
        password: password
    })
    // if role == 'Admin'
    console.log(data)
    return data.role


}
