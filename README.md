# Radarr Queue Card

A custom Lovelace card for Home Assistant that displays your Radarr download queue or movie library in a beautiful, modern interface.

## Features

- **Two View Modes**: Display download queue or your movie library
- **Visual Editor**: Configure the card using the UI - no YAML required
- **Movie Posters & Fanart**: Beautiful backgrounds from TMDB
- **Live Search**: Filter items by title with instant results
- **Download Progress**: Animated progress bars with status indicators
- **Pagination**: Navigate through large lists with ease
- **Compact Mode**: Space-efficient layout for smaller displays
- **Fully Configurable**: Toggle visibility of all UI elements

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click the three dots menu and select "Custom repositories"
4. Add this repository URL and select "Lovelace" as the category
5. Install "Radarr Queue Card"
6. Refresh your browser

### Manual Installation

1. Download `radarr-queue-card.js` from the [latest release](../../releases)
2. Copy it to your `config/www` folder
3. Add the resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **⋮ menu** (top right) → **Resources**
   - Click **Add Resource**
   - URL: `/local/radarr-queue-card.js`
   - Type: **JavaScript Module**

## Configuration

### Basic Configuration

```yaml
type: custom:radarr-queue-card
entry_id: YOUR_RADARR_ENTRY_ID
```

### Full Configuration

```yaml
type: custom:radarr-queue-card
entry_id: YOUR_RADARR_ENTRY_ID
view_mode: queue
title: Radarr Queue
max_items: 50
items_per_page: 5
refresh_interval: 60
show_fanart: true
compact_mode: false
show_title: true
show_count: true
show_tracker: true
show_download_client: true
show_refresh_button: true
show_search: true
```

### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entry_id` | string | **Required** | The Radarr integration entry ID |
| `view_mode` | string | `queue` | Display mode: `queue` (download queue) or `library` (movie library) |
| `service` | string | Auto | Service to call (auto-detected from view_mode, or override manually) |
| `title` | string | `Radarr Queue` | Card title |
| `max_items` | number | `50` | Maximum total items to fetch |
| `items_per_page` | number | `5` | Number of items per page (pagination appears if more items) |
| `refresh_interval` | number | `60` | Seconds between auto-refresh |
| `show_fanart` | boolean | `true` | Show movie fanart as background |
| `compact_mode` | boolean | `false` | Use compact layout with smaller posters |
| `show_title` | boolean | `false` | Show the card title |
| `show_count` | boolean | `false` | Show the item count badge |
| `show_tracker` | boolean | `true` | Show the indexer/tracker name (queue mode only) |
| `show_download_client` | boolean | `true` | Show the download client name (queue mode only) |
| `show_refresh_button` | boolean | `false` | Show the manual refresh button |
| `show_search` | boolean | `false` | Show a search bar to filter items by title |

### View Modes

**Queue Mode** (`view_mode: queue`):
- Shows movies currently in the download queue
- Displays download progress, status, download client, and tracker
- Uses `radarr.get_queue` service

**Library Mode** (`view_mode: library`):
- Shows movies in your Radarr library
- Displays availability status (Available/Monitored/Unmonitored), year, and file size
- Uses `radarr.get_movies` service

### Finding Your Entry ID

The `entry_id` is required to call the Radarr service. You can find it by:

1. Go to **Developer Tools** → **Actions**
2. Search for `radarr.get_queue`
3. The entry ID will be shown in the service call data

## Service Response Format

This card expects the `radarr.get_queue` service to return data in the following format:

```yaml
movies:
  "Movie Title":
    id: 123456
    movie_id: 123
    title: "Movie Title"
    download_title: "Movie.Title.2024.1080p.WEB-DL"
    progress: "45.23%"
    size: 5000000000
    size_left: 2750000000
    status: "downloading"
    tracked_download_status: "ok"
    tracked_download_state: "downloading"
    download_client: "qBittorrent"
    indexer: "My Indexer"
    protocol: "ProtocolType.TORRENT"
    images:
      poster: "https://image.tmdb.org/..."
      fanart: "https://image.tmdb.org/..."
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

The built file will be in `dist/radarr-queue-card.js`.

## License

MIT
