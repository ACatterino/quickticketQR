// import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Agregar accessToken a la sesión
  }
  interface JWT {
    accessToken?: string; // Agregar accessToken al JWT
  }
}
