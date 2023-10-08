export default function HomePageNav() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col border-x border-t border-zinc-700 lg:w-11/12 md:w-96 sm:w-80  mx-2  ">
        <h1 className="pl-3 text-xl pt-2">
          <strong>Home</strong>
        </h1>
        <section className="flex pt-5">
          <h2 className="ml-16 ">
            <strong>For you</strong>
            <div>
              <div className="bg-sky-500 mt-3 h-1 w-15 rounded-md" />
            </div>
          </h2>

          <h2 className="ml-72 opacity-50">Following</h2>
        </section>
      </div>
    </div>
  );
}
