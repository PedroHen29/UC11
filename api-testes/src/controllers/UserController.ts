import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();
export class UserController {
    create(request: Request, response: Response): Response {
        try {
            const {name, email} = request.body;
            const user = userService.createUser(name,email);
            return response.status(201).json(user);
        }catch (error) {
            const message = error instanceof Error ? error.message : 'Erro interno';
            return response.status(400).json({error: message});
        }

    }
    list(request:Request, response: Response): Response {
        const users = userService.listUsers();
        return response.status(200).json(users);
    } findById(request: Request, response: Response): Response {
        const id = Number(request.params.id);
        const user = userService.findfUserById(id);
        if(!user){
            return response.status(404).json({error: 'Usuario não encontrado'});

        }
        return response.status(200).json(user);
    } 
     
}