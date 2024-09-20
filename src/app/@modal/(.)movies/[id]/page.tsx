"use client";

import MovieModal from "@/components/movie/movie-modal";
import { Dialog } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

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
