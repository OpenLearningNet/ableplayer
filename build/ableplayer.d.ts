declare module 'ableplayer' {
	interface AblePlayerOptions {
		onLoaded?: () => void;
		onPlay?: () => void;
	}

	export class AblePlayer{
		constructor(media: HTMLVideoElement | null, options: AblePlayerOptions);
		getDuration(): Promise<number>;
	}
}
