// A site path with the configured base in front, so every link holds under a base path
export const url = (path) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

// A post date as "October 21, 2026"; post dates are midnight UTC
export const postDate = (date) => new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
