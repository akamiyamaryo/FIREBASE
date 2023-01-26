
import { Button } from '../components/button'
import { GoogleAuthProvider, signInWithPopup,  UserCredential } from 'firebase/auth'
import { auth } from '../firebase/cliant'

const LoginPage=()=> {
    const login = (): Promise<UserCredential> => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      };
      

  return (
    <>
    <div>
        <h1>ログイン</h1>

        <Button type="button" onClick={login}>ログインする</Button>
    </div>
    </>
  )
}


