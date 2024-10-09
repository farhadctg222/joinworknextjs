import NextAuth from "next-auth"
import CredentialProviders from "next-auth/providers/credentials"


export const oauth = {
    secret: process.env.NEXT_SECRET,
    session:{
        strategy:'jwt'
    },
    providers: [
        CredentialProviders({
        credentials:{
            email:{label:"Email",type:"text", require:true,placeholder:'text'},
            password:{label:"Password",type:"password", require:true,placeholder:'text'}
        },
        async authorize (credentials) {
            const {email,password}= credentials
            if(!credentials){
                return null
            }
           if(email){
            const curren = user.find((users)=> users.email===email)
            if(curren){
                if(curren.password===password){
                    return curren
                }
            }
           }
           return null
        }
    })],
    pages:{

    }
}
const handler = NextAuth(oauth)

const user = [
    {name:'farhad',email: 'farhad@gmail.com',password:'farhad'},
    {name:'farhad',email: 'far@gmail.com',password:'farhad'}
]
export {handler as GET, handler as POST}