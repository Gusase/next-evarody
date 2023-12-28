import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

let moreUserData;

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        // moreUserData = {
        //   id: profile.id,
        //   node_id: profile.node_id,
        //   login: profile.login,
        //   html_url: profile.html_url,
        //   location: profile.location,
        //   bio: profile.bio,
        //   twitter_username: profile.twitter_username,
        //   created_at: profile.created_at,
        // };
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          node_id: profile.node_id,
          login: profile.login,
          html_url: profile.html_url,
          location: profile.location,
          bio: profile.bio,
          twitter_username: profile.twitter_username,
          created_at: profile.created_at,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async session(session) {
  //     // console.log("🚀 ~ file: route.js:34 ~ session ~ callback:", session);
  //     // if (!session?.user) {
  //     //   return session;
  //     // }
  //     // session.user = { ...session.user, ...moreUserData };
  //     // console.log("🚀 ~ file: route.js:47 ~ session ~ session:", session);
  //     // console.log(
  //     //   "🚀 ~ file: route.js:47 ~ session ~ moreUserData:",
  //     //   moreUserData
  //     // );
  //     return session;
  //   },
  // },
};

// export const informationDetail = () => {
//   return moreUserData;
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
