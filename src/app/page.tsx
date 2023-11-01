import { headers } from "next/headers";

type IData = {
  [key: string]: string;
};

export default async function Home() {
  const headersData = headers();
  const host = headersData.get("host") || "localhost";
  const protocol =
    headersData.get("x-forwarded-proto") ?? host.startsWith("localhost")
      ? "http"
      : "https";
  const apiBase = `${protocol}://${host}`;

  const res = await fetch(`${apiBase}/api/data`);
  const data: IData = await res.json();

  return (
    <div className="flex flex-col  w-screen h-screen border border-red-100">
      <div className="text-2xl font-bold text-red-800 m-3 ">x-init 模板URLS</div>
      <div className="p-3">{`${apiBase}/api/data`}</div>
      {Object.keys(data).map((key: string) => (
        <div key={key} className="flex border gap-4 p-3 border-red-800 text-xl font-bold text-red-400">
          <div className="w-96">{key}</div>
          <div>{data[key]}</div>
        </div>
      ))}
    </div>
  );
}
