import { initializeApp,cert,getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

/*getApps()で初期化させているアプリケーションが存在しなければ
初期化する*/
if(!getApps()?.length){
initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_KEY as string)),
  });
}

export const adminDB = getFirestore();
