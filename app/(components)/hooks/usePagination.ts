import {useState, useEffect } from 'react';

export function usePagination(items, itemsPerPage = 3){
    const [visibleItems, setVisibleItems] = useState([])
    const [showAll, setShowAll ] = useState(false)

    useEffect(() => {
        if (!showAll) {
            const startIndex = Math.max(0, items?.length - itemsPerPage)
            setVisibleItems(items?.slice(startIndex, startIndex + itemsPerPage));
        } else {
            setVisibleItems(items)
        }
    }, [items, itemsPerPage, showAll]);

    return {visibleItems, showAll, setShowAll };
}