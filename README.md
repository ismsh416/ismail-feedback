# Before I sign off — a farewell page

A tiny static site: people type their name and see a personal note from you.
They can also leave a private note back that only you see.

## 1. Add real notes

Open `feedback-data.js`. Replace the three example entries with real people
and real messages. The fallback message at the bottom is what everyone
*not* on your list sees (clients, wider team) — spend a minute on it, most
visitors from a company-wide email will land there.

## 2. Connect the "leave a note" form (2 minutes, free)

This page has no server, so submissions need somewhere to go. [Formspree](https://formspree.io)
is free for this (50 submissions/month, no card needed):

1. Sign up at formspree.io with the email you want notes sent to.
2. Create a new form. It gives you a URL like `https://formspree.io/f/abcd1234`.
3. Open `index.html`, find this line near the bottom of the `<form>` tag:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual ID.
4. Formspree will ask you to confirm your email the first time someone
   submits — that's normal, just click the confirmation link.

Until you do this, the form shows a friendly "not connected yet" message
instead of failing silently.

## 3. Test it locally

Open `index.html` directly in a browser (double-click it), or run a local
server if you want the form to work end-to-end before deploying:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 4. Deploy to GitHub Pages

1. Create a new GitHub repo (public — Pages on a free account needs public).
2. Add these three files to it: `index.html`, `styles.css`, `feedback-data.js`.
3. In the repo, go to **Settings → Pages**, set **Source** to your main
   branch, root folder, and save.
4. GitHub gives you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two. That's the link for your email.

## One honest caveat

This is a static page, not an app with logins — so it can't do *real*
access control. The reveal-by-name search is a nice piece of UX, not a
lock: anyone who opens their browser's dev tools can technically see the
full contents of `feedback-data.js`, including notes meant for other
people. Don't put anything in there you wouldn't want a curious person to
find if they looked.

The "leave a note back" form is genuinely private, though — submissions go
straight to your email via Formspree and are never rendered on the page,
so no visitor (including the person who wrote it) can see what anyone
submitted.
