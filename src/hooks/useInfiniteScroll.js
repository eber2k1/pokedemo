import { useEffect } from 'react';

export const useInfiniteScroll = (loadMore, loading, hasMore) => {
    useEffect(() => {
        if (loading || !hasMore) return;

        const handleScroll = () => {
            const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
            const threshold = document.documentElement.offsetHeight - 200; // 200px antes del final
            
            if (scrollPosition >= threshold) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore, loading, hasMore]);
};
