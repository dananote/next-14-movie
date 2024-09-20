"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

//TODO 새로고침 했을 경우 어떻게 처리할지 고민 현재는 바로 뒤로 보냄
export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const route = useRouter();
  useEffect(() => {
    route.push("/");
  }, []);

  return (
    <div>
      <h2>안녕하세요 {id}</h2>
    </div>
  );
}
