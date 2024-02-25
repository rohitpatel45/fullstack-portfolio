async function getData() {
  const res = await fetch(`http://localhost:5000/api/v1/users/userlist`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Users = async () => {
  const data = await getData();
  console.log(data);
  //   const payload = data.payload;
  //   console.log(payload);

  return (
    <main>
      <div className="text-center font-bold">
        <p>Total User : {data.Total}</p>
      </div>
      <div className="grid grid-cols-3 gap-3 place-items-center bg-gradient-to-t from-slate-700">
        {data.payload.map((item: any) => (
          <div className="" key={item.userName}>
            {item.userName}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Users;
