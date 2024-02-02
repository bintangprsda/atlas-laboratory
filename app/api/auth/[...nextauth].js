// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { firestore } from '../../../lib/firebase';
import { query, getDocs, collection, where } from 'firebase/firestore';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('username', '==', credentials.username));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          throw new Error('No user found with the given username');
        }

        const user = snapshot.docs[0].data(); // Assuming unique usernames
        if (user.password === credentials.password) {
          // For security, don't return the actual user's password
          return { id: snapshot.docs[0].id, username: user.username };
        } else {
          throw new Error('Incorrect password');
        }
      }
    }),
  ],
  session: {
    // Configuration options for sessions
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
});
