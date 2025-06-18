
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <Head>
        <title>Resume Builder</title>
      </Head>
      <h1 style={{ color: '#333' }}>Resume Builder SaaS</h1>
      <p>Create beautiful resumes with multiple templates and export as PDF!</p>
    </div>
  );
}
