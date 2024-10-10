import { Conectdb } from "@/app/componet/Connectdb"
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
            email:{label:"Email",type:"email", require:true, placeholder:'text'},
            password:{label:"Password", type:"password", require:true, placeholder:'text'}
        },
        async authorize (credentials) {
            const {email,password}= credentials
            if(!credentials){
                return null
            }
           if(email){
            const database =await Conectdb()
            const user = await database.collection('user').findOne({email})
            // const curren = user.find((users)=> users.email===email)
         console.log(user)
            if(user){
                if(user.password===password){
                    return user
                }
            }
           }
           return null
        }
    })],
    pages:{

    },


    
    callbacks: {
      async jwt({ token, account,user }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
         token.type = user.type
        }
        return token
      },
      async session({ session,user, token  }) {
        // Send properties to the client, like an access_token from a provider.
       session.user.type= token.type
        return session
      }
    }
    

}
const handler = NextAuth(oauth)

// const user = [
//     {name:'farhad',
//         email: 'farhad@gmail.com',
//         password:'farhad',
//         type: 'admin',
//         image:'https://lh3.googleusercontent.com/a/ACg8ocIXCawE1VlzIn7yj-79CUxjMbK0qtW7sxERMBs3kMkIeO4tR9qr=s100-p-k-rw-no'

//     },
//     {name:'sakib',
//         email: 'far@gmail.com',
//         password:'farhad',
//         type: 'moderator',
//         image:'https://lh3.googleusercontent.com/a/ACg8ocIXCawE1VlzIn7yj-79CUxjMbK0qtW7sxERMBs3kMkIeO4tR9qr=s100-p-k-rw-no'
//     },
//     {name:'solaiman',
//         email: 'solaiman@gmail.com',
//         password:'farhad',
//         type: 'executive',
//          image:'https://lh3.googleusercontent.com/a/ACg8ocIXCawE1VlzIn7yj-79CUxjMbK0qtW7sxERMBs3kMkIeO4tR9qr=s100-p-k-rw-no'
//     }
// ]





export {handler as GET, handler as POST}