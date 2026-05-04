import { User } from "../types/User";
export class UserService{
    private users: User[] = [];
    private currentId = 1;

    createUser(name: string, email:string, data_nasc : Date, cpf : string): User{
        if(!name || !email || !cpf || !data_nasc) {
            throw new Error('Nome, email, cpf e data de nascimento são obrigatorios');
        }
    const emailJaExistente = this.users.some((user)=> user.email === email);
    const cpfjaexistente = this.users.some((users) => users.cpf === cpf);
    if(emailJaExistente){
        throw new Error('Email já cadastrado');
    }
    if(name.trim().length <= 3){
        throw new Error ('Nome não pode ter menos de que tres caracteres');
        
    }
    if(cpfjaexistente){
        throw new Error('Cpf já existente! ')
    }
    const idademinima: Date = new Date ("2008-04-30")
    if(data_nasc > idademinima){
        throw new Error ('Você não tem a idade minima para se cadastar')
    }
    const newUser: User = {id: this.currentId++,
    name,
    email,
    data_nasc,
    cpf
    };
    this.users.push(newUser);
    return newUser;
    }

    listUsers(): User[] {
        return this.users;
    }

    findfUserById(id:number): User| undefined {
        return this.users.find((user) => user.id === id);
    }
}