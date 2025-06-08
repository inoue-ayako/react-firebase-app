import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function Home() {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, 'likes', 'counter');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLikeCount(docSnap.data().value);
      }
    };
    fetchLikes();
  }, []);

  const handleLike = async () => {
    const docRef = doc(db, 'likes', 'counter');
    const newCount = likeCount + 1;
    await updateDoc(docRef, { value: newCount });
    setLikeCount(newCount);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
    <div><p>React ＋ Firebaseのデモページです。</p></div>
      <h1>❤️ {likeCount}</h1>
      <button onClick={handleLike} style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}>
        いいね！してね
      </button>
    </div>
  );
}

export default Home;
