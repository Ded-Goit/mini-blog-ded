# 📝 Mini Blog

![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs)
![i18n](https://img.shields.io/badge/i18n-en--ua-yellowgreen)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

A multilingual mini-blog built with **Next.js App Router**, supporting English 🇬🇧 and Ukrainian 🇺🇦, featuring SSR/SSG, dynamic routes, and full SEO support.

> 🚀 Deployed: [mini-blog-ded.vercel.app](https://mini-blog-ded.vercel.app/)

---

## 🔗 Tech Stack

- **Framework**: [Next.js 15+ App Router](https://nextjs.org/docs/app)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Routing**: File-based App Router
- **i18n**: `next-intl` with dynamic `[lang]` routing
- **Hosting**: [Vercel](https://vercel.com/)
- **API Source**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

yaml

---

## 🌐 Pages

| URL                        | Description                 |
| -------------------------- | --------------------------- |
| `/en` or `/ua`             | Homepage                    |
| `/en/posts/1`              | Individual post (English)   |
| `/ua/posts/1`              | Individual post (Ukrainian) |
| `/en/about` or `/ua/about` | About the project           |

---

## 🙋‍♂️ About the Developer

Developed by **Andrii Romanov (a.k.a. Дед Мазай)** — a passionate Fullstack Developer & Project Manager with 8+ years of experience.  
Also a Tarot Reader with 20+ years of practice 🔮.

---

## 🏢 Client

This mini-blog was created as part of a GoIT educational program.

> 👥 [GoIT – Start Your Career in IT](https://allmarathons-lp-ua.goit.global/)

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Ded-Goit/mini-blog-ded.git
cd mini-blog-ded

# Install dependencies
npm install

# Run locally
npm run dev
📦 Build for Production
bash

npm run build
npm start
🗣 Switching Languages
The site supports both Ukrainian (ua) and English (en) via URL prefixes:

/en → English

/ua → Українська

Use the language switcher in the header to change language on any page.

📃 License
This project is open-sourced for educational purposes.
```
