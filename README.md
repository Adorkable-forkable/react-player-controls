# react-player-controls

Dump UI components for media players

## Components

#### Playback and song changes

```jsx
// Play and pause
<PlayButton isEnabled={true} onClick={playHandler} />
<PauseButton onClick={pauseHandler} />

// Play and pause wrapped in a PlaybackControls component
<PlaybackControls
  isPlayable={true}
  isPlaying={false}
  onPlaybackChange={setPlayback}
/>

// Prev and next
<PrevButton onClick={prevHandler} isEnabled={currentSong > 0} />
<NextButton onClick={nextHandler} isEnabled={currentSong < numSongs.length - 1} />
```

#### Progress and time

```jsx
// Simple time formatter
// Will render "3:24"
<FormattedTime numSeconds={204} />

// Progress bar and seek control
<ProgressBar
  totalTime={song.duration}
  currentTime={audioEl.currentTime}
  canSeek={true}
  onSeek={seekTime => audioEl.currentTime = seekTime}
/>

// TimeMarker composite component
```

## Development

Build:

```sh
# One-time build
npm run build

# Continuous build
npm run dev
```

Run tests:

```sh
npm run test
```
