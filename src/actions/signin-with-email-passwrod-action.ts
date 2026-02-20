"use server";

import { routes } from "@/app/routes";
import { SupabaseAuthDataSource } from "@/data/datasource/supabase-auth-datasoruce";
import { SupabaseAuthRepository } from "@/data/repositories/supabase-auth-repository";
import { SignInWithEmailPasswordUseCase } from "@/usecase/auth/signin-with-email-and-passwrod";
import { redirect } from "next/navigation";



export async function signInWithEmailPasswordAction(formData: FormData): Promise<void> {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  // Datasource (Supabase – server side)
  const datasource = new SupabaseAuthDataSource();

  // Repository
  const authRepository = new SupabaseAuthRepository(datasource);

  // UseCase
  const usecase = new SignInWithEmailPasswordUseCase(authRepository);

  // Execute business logic
  await usecase.execute(email, password);
  redirect(routes.admin.dashboard);
}


