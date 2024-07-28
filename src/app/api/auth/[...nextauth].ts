import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!, //Git Hub-i kam yete GOOGLE, apa Google-i console-um vor stexcem project, kunenam id u secret
      clientSecret: process.env.GITHUB_SECRET!, //!-ov typescript-in asum enq vor id-n u secret yerbeq null chen lini
    }),

    CredentialsProvider({
      type: 'credentials', //linuma type en grum, yerb?

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      }, //sranov ksteghci NextAuth.js-i signin -i hamar naxatesvac default page for login with credentials

      // credentials: {}, //yete uzum enq mer Custom page-@ lini login-i jamanak //apa {} ev ktanq providers-ic durs pages:....
      async authorize(credentials, req) {
        // const res = await fetch('/.../endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // const user = await res.json();
        // if (res.ok && user) {
        //   return user;
        // }
        // return null;
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== 'arevikMosinyan@gmail.com' && password !== '1234') {
          // return null;//es depwum kta signin function-i built in error meassge@
          throw new Error('invalid credentials'); //mer custom error meassage
        }
        return { id: '12', email: 'arevikMosinyan@gmail.com' };
      },
    }),
  ],
  // pages: {
  //   signIn: '/app/FormWithNextAuthCustomPage',
  //   signOut:'/app/SignOutWithNextAuthCustomPage',
  //   error: '/app/ErrorWithNextAuthCustomPage'
  // },
  session: {
    strategy: 'jwt', //stacvuma yete NextAuth.js apa misht jwt-ov? serverum session data el chi pahvum, miayn client side-um.
    //kam dnum en jwt:true
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, //unique key piti lini, string: bayc vonca jisht stexcel?
  },
};

export default NextAuth(authOptions);
// ???? The Credentials provider can only be used if JSON Web Tokens are enabled for sessions.
// Users authenticated with the Credentials provider are not persisted in the database.
