/**
 * Para criar: name, email, password
 */

// Definir formato de um objeto
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string; //? não obrigatório
    email: string;
    password: string;
    // techs: string[] outro formato para array
    techs: Array<string | TechObject>; // | ou 
};

export default function createUser({name = '', email, password} : CreateUserData) {
    const user = {
        name, 
        email,
        password,
    };

    return user;
}