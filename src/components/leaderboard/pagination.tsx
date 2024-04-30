"use client";

import { Dispatch, SetStateAction } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "../ui/button";

interface SliderProps {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    totalUsers: number;
    usersPerPage: number;
}

export function Pagination({ setCurrentPage, totalUsers, usersPerPage }: SliderProps) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center justify-center gap-3 w-full">
            {pages.map((page, idx) => (
                <Button className="font-bold text-[#717171]" key={idx} onClick={() => setCurrentPage(page)}>
                    {page}
                </Button>
            ))}
        </div>
    );
}
