import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      console.log(session)
      /*
      {
        user: {
          name: '윤수지',
          email: 'yyounsj@gmail.com',
          image: 'https://lh3.googleusercontent.com/a/AItbvmnuFb38ZU9w4mctU0_nZjCMFu_nKxOzdXzNFS_O=s96-c'
        },
        expires: '2022-09-11T01:13:47.185Z',
        accessToken: 'ya29.A0AVA9y1tH-y_89RvJyziNW-jqkeyNZzE7Rnwrh2WIlpYBQzcoqm2R_IE__f2E859PJ5L7mZwAaa77aQlWytw45bHH-ATxfI8Jafz92undJEEftpwuKm9YPD5DrhYToBPq3Ivkuq-dmR82GUywTic1u6rbVyBGaCgYKATASATASFQE65dr8JcIxw2v8_0HMD6q7koWDgw0163'
      }
      */
      return session
    }
  }
});