function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>このアプリについて</h2>
      <p>React と Firebase を使って作成した「いいね」アプリです。</p>
      <p>Firestoreでリアルタイムにデータ更新され、ページ遷移も SPA 形式で構築されています。</p>
    </div>
  );
}

export default About;
