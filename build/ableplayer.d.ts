declare module 'ableplayer' {
	type AblePlayerState =
	| 'stopped' // - Not yet played for the first time, or otherwise reset to unplayed.
	| 'ended' // - Finished playing.
	| 'paused' // - Not playing, but not stopped or ended.
	| 'buffering' // - Momentarily paused to load, but will resume once data is loaded.
	| 'playing'; // - Currently playing.
	
	interface AblePlayerOptions {
		onLoaded?: () => void;
		onPlay?: () => void;
	}

	export class AblePlayer{
		constructor(media: HTMLVideoElement | null, options: AblePlayerOptions);
		getDuration(): Promise<number>;
		getPlayerState(): Promise<AblePlayerState>;
		getElapsed(): Promise<number>;
	}
}
