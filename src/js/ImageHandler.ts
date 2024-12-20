/**
 * Handles Images
 */
export default function imageHandler() {
	const industriousImages = document.querySelectorAll<HTMLImageElement>('.skip-lazy img');
	const heroImages = document.querySelectorAll<HTMLImageElement>('#cs-content .x-section:first-child .x-bg-layer-lower-img img');
	
	const eagerImages = [...industriousImages, ...heroImages];
	eagerImages.forEach((img) => {
		if (!img) return;
		img.loading = 'eager';
		img.setAttribute('data-spai-loading', 'eager');
	});

	const hiddenImages = document.querySelectorAll<HTMLImageElement>('.x-bg-layer-lower-img img');
	[...heroImages,...hiddenImages].forEach((img) => {
		if (!img) return;
		img.setAttribute('aria-hidden', 'true');
	});
}
