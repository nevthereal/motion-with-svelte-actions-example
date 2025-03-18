import {
	animate,
	hover as hoverMotion,
	type AnimationOptions,
	type DOMKeyframesDefinition
} from 'motion';
import type { Action } from 'svelte/action';

type MotionParams = {
	keyframes: DOMKeyframesDefinition;
	options?: AnimationOptions;
};

export const motion: Action<HTMLElement, MotionParams> = (
	node: HTMLElement,
	data: MotionParams = { keyframes: { scale: [0, 1] } }
) => {
	$effect(() => {
		animate(node, data.keyframes, data.options);
	});
};

export const hover: Action = (node: HTMLElement) => {
	$effect(() => {
		hoverMotion(node, (element) => {
			animate(element, { scale: 1.3 }, { type: 'spring', duration: 0.3 });

			return () => animate(element, { scale: 1 }, { type: 'spring' });
		});
	});
};
