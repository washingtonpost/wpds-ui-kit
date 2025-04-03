import Fuse from 'fuse.js';

let searchIndex = null;
let fuse = null;

/**
 * Load the search index if it hasn't been loaded already
 */
export async function getSearchIndex() {
  if (searchIndex === null) {
    try {
      const response = await fetch('/search-index.json');
      searchIndex = await response.json();
      console.log(`Loaded search index with ${searchIndex.length} documents`);
    } catch (error) {
      console.error('Error loading search index:', error);
      searchIndex = [];
    }
  }
  return searchIndex;
}

/**
 * Get or initialize the Fuse.js instance
 */
export async function getFuse() {
  if (fuse === null) {
    const index = await getSearchIndex();
    fuse = new Fuse(index, {
      keys: [
        { name: 'title', weight: 1.0 },
        { name: 'description', weight: 0.8 },
        { name: 'kicker', weight: 0.7 },
        { name: 'content', weight: 0.5 }
      ],
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      minMatchCharLength: 2
    });
  }
  return fuse;
}

/**
 * Search the documentation
 * @param {string} query - The search query
 * @returns {Array} - Search results
 */
export async function searchDocs(query) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const fuse = await getFuse();
  return fuse.search(query);
}
