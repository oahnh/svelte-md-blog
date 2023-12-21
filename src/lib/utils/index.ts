export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePosts = Object.entries(allPostFiles);

	console.log('iterablePosts', iterablePosts);

	const allPosts = await Promise.all(
		iterablePosts.map(async ([path, resolver]) => {
      // TODO: look into how we can type this from vite glob
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
