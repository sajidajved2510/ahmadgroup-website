import { AuthRepository } from "@/domain/repositories/auth-repository";


export class SignInWithEmailPasswordUseCase {

  constructor(
    private readonly authRepository: AuthRepository
  ) {}

  async execute(
    email: string,
    password: string
  ): Promise<void> {

    if (!email?.trim()) {
      throw new Error("Email is required");
    }

    if (!password) {
      throw new Error("Password is required");
    }

    await this.authRepository.signInWithEmailAndPassword(
      email,
      password
    );
  }
}