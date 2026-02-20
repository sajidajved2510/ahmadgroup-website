"use client";
import React, { useState, useEffect } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export const DEFAULT_ITEMS_PER_PAGE = 6

type BlogPaginationProps = {
  totalItems: number
  itemsPerPage?: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

const BlogPagination = ({ totalItems, itemsPerPage = DEFAULT_ITEMS_PER_PAGE, currentPage: controlledPage, onPageChange }: BlogPaginationProps) => {
    // Support controlled usage: if parent provides currentPage + onPageChange, use those,
    // otherwise fall back to local state.
    const [localPage, setLocalPage] = useState<number>(controlledPage ?? 1)
    const current = controlledPage ?? localPage

    useEffect(() => {
        if (controlledPage !== undefined) {
            setLocalPage(controlledPage)
        }
    }, [controlledPage])
    const totalPages = Math.ceil(totalItems / itemsPerPage) // Calculate total pages needed
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1) // Generate array of page numbers
    return (
        <div className="flex justify-center px-3">
            {
                <div className="flex flex-col items-center gap-4">
                    <Pagination>
                        <PaginationContent className='border border-black/30 rounded-full py-1.5 px-5 gap-7'>
                            {/* Previous Button */}
                            <PaginationItem>
                                <PaginationPrevious
                                        onClick={() => {
                                                    const next = Math.max(1, current - 1)
                                                    if (onPageChange) {
                                                        onPageChange(next)
                                                    } else {
                                                        setLocalPage(next)
                                                    }
                                                }}
                                        className={current === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {/* Page Numbers */}
                            {pages.map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        onClick={() => {
                                            if (onPageChange) {
                                                onPageChange(page)
                                            } else {
                                                setLocalPage(page)
                                            }
                                        }}
                                        isActive={page === current}
                                        className={`${page === current ? "bg-[var(--secondary-color)] rounded-full text-white hover:bg-[var(--secondary-color)] hover:text-white" : "border-black/30 border rounded-full"} size-10 cursor-pointer`}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {/* Next Button */}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => {
                                        const next = Math.min(totalPages, current + 1)
                                        if (onPageChange) {
                                            onPageChange(next)
                                        } else {
                                            setLocalPage(next)
                                        }
                                    }}
                                    className={current === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            }
        </div>
    )
}

export default BlogPagination
