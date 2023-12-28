import Jumbotron from "./Jumbotron";

export default function Layout({ params: { id } ,children}) {
  return (
    <>
      <Jumbotron id={id} />

      <main className="mx-auto sm:px-10 md:px-28 lg:px-32 max-w-[1600px] px-[5vw] min-[2368px]:px-[1.5vw]">
        <section>{children}</section>
      </main>
    </>
  );
}
