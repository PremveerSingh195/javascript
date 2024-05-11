import conf from '../conf/conf.ts';
import { Client, Account, ID } from 'appwrite';

interface UserCredentials {
    email: string;
    password: string;
    name?: string;
}

export class AuthService {
    private client: Client;
    private account: Account;

    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: UserCredentials) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: UserCredentials) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        // Implement getCurrentUser logic here
    }
}

const authService = new AuthService();

export default authService;
