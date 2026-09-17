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
  "Vasanth": {
    message:
      "You gave me room to make the harder call instead of the easier one, and backed me when it mattered. A good chunk of how I think about this work now, I owe to that.\n\nThank you for the trust — it wasn't lost on me.",
  },

  "Chris Jhonson": {
  message:
    "Working with you was one of the better parts of this job — you asked sharp questions, pushed back when something didn't add up, and never once made that feel adversarial.\n\nThank you for the trust you put in the work. It made a real difference on my end.",
},

  "Nathan Quirk": {
  message:
    "Your technical depth always stood out, but what I valued more was how you thought through a problem — you had a way of reframing things that made the right approach obvious once you said it out loud.\n\nIt was a genuine pleasure working with you.",
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
