import HomePageNav from './homePageNav';

export interface Banners {
  image?: string;
  id?: number;
  description?: string;
  name: string;
  profile: string;
}

export default async function HomePage() {
  const res = await fetch(
    'https://6511f734b8c6ce52b39539dc.mockapi.io/Banners',
    {
      cache: 'no-cache',
    }
  );
  const banners: Banners[] = await res.json();

  return (
    <div className="">
      <HomePageNav />
      <div className="flex flex-col justify-center items-center">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="border-x border-t border-zinc-700 lg:w-11/12  md:w-96 sm:w-80 mx-2 threads"
          >
            <section className="flex ml-3 py-3">
              <img
                src={banner.profile}
                alt="avatar"
                width={84}
                className="rounded-sm h-10 w-10"
              />
              <section className="flex flex-col px-3">
                <h1 className="mb-1">{banner.name}</h1>
                <h3 className="mb-2 px-2">{banner.description}</h3>
              </section>
            </section>
            <section className="py-5 px-5 flex flex-col justify-center items-center ">
              <img
                height={500}
                width={500}
                alt="image"
                src={banner.image}
                className="cursor-pointer rounded-3xl border border-gray-700"
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
