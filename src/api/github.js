const GITHUB_API_URL = 'https://api.github.com/search/repositories'

export const fetchRandomRepo = async (language) => {
    const query = `language:${language}`;
    const sort = 'stars';
    const order = 'desc';

    try {
        const response = await fetch(
            `${GITHUB_API_URL}?q=${query}&sort=${sort}&order=${order}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data from GitHub API');
        }

        const data = await response.json();

        if(data.items.length === 0) {
            throw new Error('No repositories found for the given language');
        }

        const randomIndex = Math.floor(Math.random() * Math.min(100, data.items.length));
        return data.items[randomIndex];
    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        throw error;
    }
};