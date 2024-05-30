import NextAuth from 'next-auth';
import authConfig from './auth.config';

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    session: async (session, user) => {
      session.token = user.token;
      return session;
    },
    jwt: async (token, user) => {
      if (user) {
        token = user.token;
      }
      return token;
    },
  },
  ...authConfig
})

export { handler as GET, handler as POST }