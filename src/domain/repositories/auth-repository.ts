


export interface AuthRepository {
  signInWithEmailAndPassword( email: string, password: string ): Promise<void>;
}