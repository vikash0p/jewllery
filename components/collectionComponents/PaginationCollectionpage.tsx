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
  const maxVisiblePages = 3;

  // Calculate the range of page numbers to display
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, page + Math.floor(maxVisiblePages / 2));

  // Adjust the start and end page if there are fewer than maxVisiblePages
  if (endPage - startPage + 1 < maxVisiblePages) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  }

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

        {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
          const pageNumber = startPage + i;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`/collection?page=${pageNumber}`}
                className={`cursor-pointer ${
                  page === pageNumber ? "bg-primary" : ""
                }`}
                onClick={() => {
                  setPage(pageNumber);
                  router.push(`/collection?page=${pageNumber}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                isActive={page === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

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
