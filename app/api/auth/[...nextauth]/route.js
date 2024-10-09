import Login from "@/app/login/page";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider(
            {
        credentials: {
            email:
            {
                
                label: "email",
                type: "text",
                require: true,
                placeholder: "Your Email Here",
                name: 'email'
            },
            password:
            {
                label: "password",
                type: "password",
                require: true,
                placeholder: "Your password Here",
                name:'password'
            },
           
        },
        async authorize(credentials) {
           if(!credentials){
            return null
           }
           
            
           return true
        }
    })

],

    pages: {
        Login


    }
}

const handel = NextAuth(authOption)
export { handel as GET, handel as POST }