// useCardHistory.js
import { useSyncExternalStore } from 'react';

let cachedSnapshot = null;

function getSnapshot() {
  try {
    const storedValue = localStorage.getItem('CardHistory');
    const currentSnapshot = storedValue ? JSON.parse(storedValue) : [];
    
    // 只有當快照發生變化時才返回新的快照
    if (JSON.stringify(currentSnapshot) !== JSON.stringify(cachedSnapshot)) {
      cachedSnapshot = currentSnapshot;
      return currentSnapshot;
    }
    
    // 如果快照未變化，返回緩存的快照
    return cachedSnapshot;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

function subscribe(callback) {
  try {
    window.addEventListener('storage', callback);
    return () => {
      window.removeEventListener('storage', callback);
    };
  } catch (error) {
    console.error('Error subscribing to storage events:', error);
    return () => [];
  }
}

export function useCardHistory(defaultValue = []) {
  const cardHistory = useSyncExternalStore(subscribe, getSnapshot);
  console.log('CardHistory_',cardHistory)
  return cardHistory || defaultValue;
}
