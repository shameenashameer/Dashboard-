"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;

  const hasNext = ITEM_PER_PAGE * (parseInt(page) -  1) + ITEM_PER_PAGE <count;
console.log(count,"count");
console.log(ITEM_PER_PAGE,"ITEM_PER_PAGE");
  const handleChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
      >
        Previus
      </button>
      <button
        className={styles.button}
        desabled={!hasNext}
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
