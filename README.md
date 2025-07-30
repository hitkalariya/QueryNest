# QueryNest

**A modern, privacy-first search engine with a built-in AI assistant—right in your browser.**

---

## What is QueryNest?

QueryNest is a next-generation web search tool designed for those who value privacy, speed, and intelligence. With a sleek interface and an integrated AI assistant, QueryNest helps you find information, summarize results, and get answers—all without tracking or ads.

- **No tracking, no ads, no nonsense.**
- **AI-powered summaries and answers, always at your fingertips.**
- **Works on any device—desktop or mobile.**
- **Customizable search and AI settings.**
- **Open for your ideas and contributions!**

---

## Features

- **Private by Design:** Your searches stay on your device. No analytics, no profiling.
- **AI Assistant:** Get instant summaries and answers based on your search results.
- **Minimalist UI:** Clean, distraction-free interface for focused searching.
- **Browser Integration:** Set QueryNest as your default search engine or use it as a standalone app.
- **Flexible Deployment:** Run locally with Docker, or build from source.

---

## Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (recommended for easiest setup)

### 1. Run with Docker

```bash
docker run -p 7860:7860 ghcr.io/hitkalariya/querynest:main
```

### 2. Add to Docker Compose

```yaml
services:
  querynest:
    image: ghcr.io/hitkalariya/querynest:main
    ports:
      - "7860:7860"
```

### 3. Build from Source

```bash
git clone https://github.com/hitkalariya/QueryNest.git
cd QueryNest
docker compose -f docker-compose.production.yml up --build
```

Once running, open [http://localhost:7860](http://localhost:7860) in your browser.

---

## FAQ

<details>
  <summary>How do I set QueryNest as my browser's search engine?</summary>
  <p>
    Use the pattern <code>http://localhost:7860/?q=%s</code> in your browser's search engine settings.
  </p>
</details>

<details>
  <summary>Can I use my own AI models?</summary>
  <p>
    Yes! Configure your preferred AI model in the settings menu or via environment variables.
  </p>
</details>

<details>
  <summary>How do I restrict access with a password?</summary>
  <p>
    Set the <code>ACCESS_KEYS</code> environment variable in your <code>.env</code> file.
  </p>
</details>

<details>
  <summary>How can I contribute?</summary>
  <p>
    Fork this repository, make your improvements, and open a pull request! All contributions are welcome.
  </p>
</details>

---

## License

MIT © [Hit Kalariya](https://github.com/hitkalariya)

---

*QueryNest: Search smarter, search privately.*
