"use client";

import MovieModal from "@/components/movie/movie-modal";
import { Dialog } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

//TODO 클라이언트 렌더링을 했는데 그럴거라면 굳이 컴포넌트를 분리하는 이유가 있나? 이거 고민해 봐야할듯
export default function MovieModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const route = useRouter();
  const goToHome = () => {
    route.back();
  };
  return (
    <Dialog defaultOpen={true} onOpenChange={goToHome}>
      <MovieModal id={id} />
    </Dialog>
  );
}
