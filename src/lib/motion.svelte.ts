import { animate, hover as hoverMotion } from 'motion';
import type { Action } from 'svelte/action';

// place files you want to import through the `$lib` alias in this folder.
export const rotateScaleIn: Action = (
	node: HTMLElement,
	data: { rotate: number | number[]; scale: number | number[] } = {
		rotate: [-180, 0],
		scale: [0.7, 1]
	}
) => {
	const { rotate, scale } = data;

	$effect(() => {
		animate(node, { rotate, scale });
	});
};

export const hover: Action = (node: HTMLElement) => {
	$effect(() => {
		hoverMotion(node, (element) => {
			animate(element, { scale: 1.3 }, { type: 'spring', duration: 1 });

			return () => animate(element, { scale: 1 }, { type: 'spring' });
		});
	});
};
