# Open Mic — Vue.js Frontend

Single-page application frontend for Open Mic, a music discovery platform for browsing songs, artists, categories, and chord charts. Pairs with the [open_mic](https://github.com/polyglotarist/open_mic) Rails API backend.

## Features

- User registration and JWT-based login/logout
- Browse and search songs, artists, and categories
- Full CRUD for songs, artists, categories, and chords
- Song detail pages with lyrics and chord charts
- Alphabetical sorting via vue2-filters
- Client-side routing with Vue Router

## Tech Stack

- **Vue.js** 2.6
- **Vue Router** 3
- **axios** for API requests
- **vue2-filters** for sorting/filtering
- **Vue CLI** 3 (webpack 4)

## Prerequisites

- Node.js (v14–v16 recommended; Node 18+ requires the OpenSSL legacy provider flag — see below)
- The [open_mic Rails API](https://github.com/polyglotarist/open_mic) running on `http://localhost:3000`

## Setup

```bash
git clone https://github.com/polyglotarist/open_mic_vue.git
cd open_mic_vue
npm install
```

### Run (Node 14–16)

```bash
npm run serve
# App available at http://localhost:8080
```

### Run (Node 18+)

webpack 4 is incompatible with Node 18's OpenSSL bindings — use this flag:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run serve
```

### Build for production

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/signup` | Register a new account |
| `/login` | Log in |
| `/songs` | Browse all songs |
| `/songs/:id` | Song detail (lyrics + chords) |
| `/songs/new` | Add a song |
| `/songs/:id/edit` | Edit a song |
| `/artists` | Browse all artists |
| `/artists/:id` | Artist detail with song list |
| `/categories` | Browse all categories |
| `/categories/:id` | Category detail with song list |
| `/chords` | Browse all chords |

## Related

- Backend: [open_mic](https://github.com/polyglotarist/open_mic)
