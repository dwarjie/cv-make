import UserProfile from "../../assets/profile.png";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-base md:text-2xl font-bold text-primary mb-1">
          Mark Darius Pagaduan
        </h1>
        <p>
          <span className="font-bold">Address:</span> Guevara, La Paz, Tarlac
        </p>
        <p>
          <span className="font-bold">Phone:</span> 09098717874
        </p>
        <p>
          <span className="font-bold">E-mail:</span> email@sample.com
        </p>
      </div>
      <div className="md:max-w-[100px] h-auto">
        <img src={UserProfile} alt="" />
      </div>
    </div>
  );
}

export default Header;
