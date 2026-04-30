import { User } from "../types/User";
export class UserService{
    private users: User[] = [];
    private currentId = 1;

    createUser(name: string, email:string): User{
        if(!name || !email) {
            throw new Error('Nome e email são obrigatorios');
        }
    const emailJaExistente = this.users.some((user)=> user.email === email);
    if(emailJaExistente){
        throw new Error('Email já cadastrado');
    }
    if(name.trim().length <= 3){
        throw new Error ('Nome não pode ter menos de que tres caracteres');
        
    }
    const newUser: User = {id: this.currentId++,
    name,
    email
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