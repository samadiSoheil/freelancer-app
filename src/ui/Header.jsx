import useGetUser from "../features/authentication/useGetUser";

export default function Header() {
  const query = useGetUser();

  console.log(query);

  return (
    <>
      <div className=" bg-secondary-300">
        <h1>سلام روزبخیر {query?.data?.user?.name}</h1>
        <p>شماره شما {query?.data?.user?.phoneNumber}</p>
      </div>
    </>
  );
}
