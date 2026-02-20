

export interface AuthDataSource {
    signInWithEmailAndPasssword ( email: string, password: string ) : Promise<void>;
}