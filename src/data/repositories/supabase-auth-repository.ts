import { AuthDataSource } from "@/domain/datasource/auth-datasource";
import { AuthRepository } from "@/domain/repositories/auth-repository";



export class SupabaseAuthRepository implements AuthRepository {


  constructor(private authDataSource: AuthDataSource) {}

    async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        const message = await this.authDataSource.signInWithEmailAndPasssword(email, password);
        return message;
    }

}