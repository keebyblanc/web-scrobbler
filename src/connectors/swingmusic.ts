export {};

// Main player container selector
Connector.playerSelector = '.b-bar';

// Track metadata selectors
Connector.trackSelector = '.track-info .title .ellip';
Connector.artistSelector = '.track-info .artistname .artist';
Connector.albumSelector = null; // Album info not visible in this player view

// Time selectors
Connector.currentTimeSelector = '.time-current .numbers';
Connector.durationSelector = '.time-full .numbers';

// Play/pause state detection
Connector.isPlaying = () => {
	// The play button has class "playsvg" when music is paused
	// When playing, this button should be a pause button (different SVG)
	const playButton = document.querySelector('.playsvg');
	return playButton === null; // If no play button, then it's playing (pause button is shown)
};

// Album artwork extraction
Connector.getTrackArt = () => {
	// Primary album art location
	const sidebarArt = document.querySelector(
		'.sidebar-songcard .l-image',
	) as HTMLImageElement;
	if (sidebarArt?.src) {
		return sidebarArt.src;
	}

	// Fallback: look for other possible album art locations
	const artSelectors = [
		'.album-art img',
		'.track-art img',
		'.cover img',
		'.artwork img',
	];

	for (const selector of artSelectors) {
		const artElement = document.querySelector(selector) as HTMLImageElement;
		if (artElement?.src) {
			return artElement.src;
		}
	}

	return null;
};

// Optional: Play button selector if needed
// Connector.playButtonSelector = '.play-btn';

// Optional: Apply metadata filters if needed
// const filter = MetadataFilter.createFilter({
// 	track: (text) => text.trim(),
// 	artist: (text) => text.trim(),
// 	album: (text) => text.trim(),
// });
// Connector.applyFilter(filter);
