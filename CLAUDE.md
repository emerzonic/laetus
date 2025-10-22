# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Laetus is an interactive audio-visual web application that creates animated shapes with sound effects based on keyboard input. Each key press generates a colored shape (circle, square, rectangle, triangle, or star) with an associated sound.

Live site: https://emerzonic.github.io/laetus/

## Architecture

### Core Components

- **[index.html](index.html)**: Main HTML file containing embedded PaperScript code (lines 38-135) for canvas rendering
- **[app.js](app.js)**: jQuery-based UI controller for shape selection menu
- **[data.js](data.js)**: Keyboard-to-sound/color mapping configuration
- **[style.css](style.css)**: Styling for canvas and navigation menu
- **sounds/**: Directory containing 26 MP3 audio files mapped to keyboard keys

### Technology Stack

- **Paper.js**: Canvas graphics library (via PaperScript embedded in HTML)
- **Howler.js**: Web audio library for sound playback
- **Semantic UI**: CSS framework for navigation menu
- **jQuery**: DOM manipulation for UI interactions

### Key Architecture Notes

1. **PaperScript Execution**: The main animation logic (lines 38-135 in [index.html](index.html)) uses PaperScript, which requires embedding in HTML with `type="text/paperscript"`. This is intentional - moving it to a separate file will break Paper.js functionality.

2. **Shape Factory Pattern**: The `shapeMapping` object maps shape names to factory functions (makeCircle, makeStar, etc.), allowing dynamic shape creation based on active UI selection.

3. **Animation System**:
   - Shapes are stored in `allShapes` array
   - `onFrame()` handler animates all shapes: scales down (.9x per frame), color hue rotates (+1), auto-removes when area < 1
   - Canvas uses full viewport with black background

4. **Key-to-Data Mapping**: Each key in [data.js](data.js) maps to an object containing a Howler.js sound instance and hex color code.

## Development

This is a static web application with no build process. Development workflow:

1. **Local Development**: Open [index.html](index.html) directly in a browser or use any local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

2. **Testing Changes**:
   - Refresh browser after editing HTML/CSS/JS files
   - Ensure browser console is open to catch errors
   - Test keyboard interactions across different keys

3. **Deployment**: The site is hosted on GitHub Pages from the repository root.

## File Modification Guidelines

- **Do not extract PaperScript**: Keep the Paper.js code embedded in [index.html](index.html) between lines 38-135
- **Sound files**: All audio files in `sounds/` must be MP3 format and referenced in [data.js](data.js)
- **Shape functions**: When adding new shapes, add factory function and update `shapeMapping` object in [index.html](index.html)
- **Key mappings**: Modify [data.js](data.js) to change key bindings, colors, or sounds
