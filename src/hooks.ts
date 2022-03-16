export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		ssr: false // sets "ssr: false" for every route on site, not a great solution
	});

	return response;
}
