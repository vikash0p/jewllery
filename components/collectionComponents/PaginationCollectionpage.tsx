"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGlobalJewelleryPaginationContext } from "@/context/JewelleryPaginationProvider";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PaginationCollectionpage() {
  const { data, page, setPage } = useGlobalJewelleryPaginationContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (currentPage) {
      setPage(Number(currentPage));
    }
  }, [searchParams, setPage]);

  if (!data) return null; 

  const totalPages = data.totalPages || 1;

  const handlePreviousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      router.push(`/collection?page=${newPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      router.push(`/collection?page=${newPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              page === 1 ? "bg-red-400 cursor-not-allowed hidden" : ""
            }`}
            onClick={handlePreviousPage}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={`/collection?page=${i + 1}`}
              className={`cursor-pointer ${
                page === i + 1 ? "bg-orange-500" : ""
              }`}
              onClick={() => {
                setPage(i + 1);
                router.push(`/collection?page=${i + 1}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              page === totalPages ? "bg-red-400 cursor-not-allowed hidden" : ""
            }`}
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
