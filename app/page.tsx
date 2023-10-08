import Image from 'next/image';
import HomePage from './(home)/homePage';
import HomePageNavLeft from './(homeNavLeft)/homeNavLeft';
import HomePageNavRight from './(homeNavRight)/homeNavRight';

export default function Home() {
  return (
    <main className="flex h-screen justify-center content-center flex-1">
      <div className="flex-1">
        <HomePageNavLeft />
      </div>
      <div className="flex-1">
        <HomePage />
      </div>
      <div className="flex-1">
        <HomePageNavRight />
      </div>
    </main>
  );
}
