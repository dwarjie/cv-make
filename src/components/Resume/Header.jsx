import UserProfile from "../../assets/profile.png";

function Header({ data }) {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-base md:text-2xl font-bold text-primary mb-1">
          {`${data.firstName} ${data.lastName}`}
        </h1>
        <p>
          <span className="font-bold">Address:</span> {data.address}
        </p>
        <p>
          <span className="font-bold">Phone:</span> {data.phoneNo}
        </p>
        <p>
          <span className="font-bold">E-mail:</span> {data.email}
        </p>
      </div>
      <div className="md:max-w-[100px] h-auto">
        <img src={UserProfile} alt="" />
      </div>
    </div>
  );
}

export default Header;
