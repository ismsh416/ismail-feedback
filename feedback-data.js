/**
 * FEEDBACK DATA
 * -------------
 * This is the only file you need to edit to add real people and notes.
 *
 * How it works:
 *  - Each entry's key is the person's name, exactly as you want it typed.
 *  - Matching is case-insensitive and ignores extra spaces, so "Priya Sharma",
 *    "priya sharma", and "  PRIYA SHARMA  " all match the same entry.
 *  - If two people share a first name, use "Priya S." / "Priya K." etc. and
 *    tell them which version to type — or just use full names for everyone.
 *  - "message" supports plain text. Use \n\n for a paragraph break.
 *
 * Replace every example below with real names and real notes before you
 * deploy. Delete the examples once you're done — they're just here to show
 * the shape of the data and let you test the page before it goes live.
 */

const FEEDBACK_DATA = {
  "Priya Sharma": {
    message:
      "You were the person I'd go to whenever a design decision felt half-baked — you'd ask the one question that made it obvious. That instinct is rare. Keep asking it.\n\nThank you for making the last two years sharper than they would've been without you.",
  },

  "Arjun Rao": {
    message:
      "Your patience with the messiest parts of the codebase never stopped surprising me. You clean up after everyone and never once make it feel like a favour.\n\nWhoever inherits you on this team is lucky.",
  },

  "Neha Kapoor": {
    message:
      "You said something in a standup eight months ago that I still think about. I won't embarrass you by repeating it here — you know the one.\n\nGo build the thing you keep almost-pitching. It's good.",
  },
};

/**
 * FALLBACK MESSAGES
 * -----------------
 * Shown to anyone whose name isn't found above — clients, wider team, or
 * anyone you haven't written for individually yet. Instead of one generic
 * line, the page picks one of these at random per person (but the same
 * person always gets the same one, based on their name — so it feels
 * chosen, not re-rolled every visit).
 *
 * Edit, reorder, add, or remove lines freely — just keep it a plain array
 * of strings. Aim for things true of almost anyone you've worked with:
 * warm, specific-sounding, not a template.
 */
const FALLBACK_MESSAGES = [
  "You always made time to help, even when you clearly didn't have time to spare.",
  "Every standup was a little better with you in it.",
  "You ask good questions — the kind that make everyone think twice.",
  "You've got a way of staying calm when everything around you is on fire.",
  "People trust you with the messy stuff, and you never make it feel like a burden.",
  "You notice the small things other people miss.",
  "You're one of those people who makes a team actually feel like a team.",
  "You show up prepared, every single time — it's rarer than it should be.",
  "You've got great instincts, even when you second-guess them.",
  "You make hard conversations easier just by how you handle them.",
  "You're generous with credit and quiet about your own wins.",
  "You've got a dry sense of humor that saved more than one long meeting.",
  "You follow through — no reminders needed.",
  "You ask for help when you need it, which is its own kind of strength.",
  "You've taught me something, even if you didn't realize it at the time.",
  "You're steady in a way that's easy to take for granted.",
  "You bring people together without ever making it about you.",
  "You've got a good eye for what actually matters.",
  "You're the person people quietly go to when something's wrong.",
  "You made the ordinary days better, and that counts for more than the big ones.",
];
