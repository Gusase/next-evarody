import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

let moreUserData;

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        moreUserData = {
          id: profile.id,
          node_id: profile.node_id,
          login: profile.login,
          html_url: profile.html_url,
          location: profile.location,
          bio: profile.bio,
          twitter_username: profile.twitter_username,
          created_at: profile.created_at,
        };
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.id;

      return session;
    },
  },
};

export const informationDetail = () => {
  return moreUserData;
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
