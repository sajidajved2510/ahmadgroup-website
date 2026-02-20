"use client";
import FooterTopBanner from "@/app/company/ahmadconcrete/sections/footer-top-banner";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

export default function ConditionalFooterBanner() {
  const pathname = usePathname();
  const allowedRoutes = [
    routes.company.ahmadConcrete,
    routes.about,
    routes.contact,
    routes.project,
    routes.career,
    routes.blog,
  ];
  
  if (!allowedRoutes.includes(pathname)) return null;
  
  return <FooterTopBanner />;
}