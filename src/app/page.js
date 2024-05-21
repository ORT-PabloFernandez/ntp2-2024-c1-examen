import Link from "next/link";


export default function Home() {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display:'flex', position: "fixed", height: "100%", width: "100%"}}>
      <Link className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="/ventas">
        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
          Ver ventas
      </span>
      </Link>
    </div>
  );
}
