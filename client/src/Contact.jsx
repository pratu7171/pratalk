import Avatar from "./Avatar.jsx";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <>
    <div key={id} onClick={() => onClick(id)}
         className={"border-b border-gray-100 flex md:flex-row flex-col items-center md:gap-2 gap:1 cursor-pointer"+(selected ? 'md:bg-blue-50 bg-[#292f3f]' : '')}>
      {selected && (
        <div className="md:w-1 bg-blue-500 md:h-12 h-1 rounded-r-md items-center" style={{ width: "calc(100vw / 4)" }}></div>
      )}
      <div className="flex md:flex-row flex-col gap-2 py-2 px-4 items-center" style={{ width: "calc(100vw / 4)"}}>
        <Avatar online={online} username={username} userId={id} />
        <span className={"text-gray-800" + (selected ? 'md:text-black text-white' : '')}>{username}</span>
      </div>
    </div>
    </>
  );
}
