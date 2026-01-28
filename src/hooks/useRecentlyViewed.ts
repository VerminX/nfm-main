import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'nfm-recently-viewed';
const MAX_ITEMS = 8;

export interface RecentlyViewedItem {
  handle: string;
  title: string;
  image: string;
  price: string;
  viewedAt: number;
}

export function useRecentlyViewed() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading recently viewed:', error);
    }
  }, []);

  // Add a product to recently viewed
  const addItem = useCallback((item: Omit<RecentlyViewedItem, 'viewedAt'>) => {
    setItems(prevItems => {
      // Remove existing entry for this product
      const filtered = prevItems.filter(i => i.handle !== item.handle);
      
      // Add new entry at the beginning
      const newItems = [
        { ...item, viewedAt: Date.now() },
        ...filtered
      ].slice(0, MAX_ITEMS);
      
      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
      } catch (error) {
        console.error('Error saving recently viewed:', error);
      }
      
      return newItems;
    });
  }, []);

  // Get items excluding a specific handle (useful for "related" on product page)
  const getItemsExcluding = useCallback((handle: string) => {
    return items.filter(item => item.handle !== handle);
  }, [items]);

  return {
    items,
    addItem,
    getItemsExcluding,
  };
}
