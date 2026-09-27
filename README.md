# Kathy & Hemant wedding page

Upload the contents of this folder to your GitHub Pages repository. No build step is needed.

Reception: October 11, 2026, 6 PM, Oasis Palace, Newark, California, as shown on the original invitation.

## RSVP
The on-page form posts to the spreadsheet’s existing Apps Script deployment, with destination `US-Indian`. The separate RSVP destination remains supported. Fields saved: submission time, guest name, plus-one name, guest count, dietary selections, other dietary needs, and a unique submission ID. Repeating the same request ID does not create another row. Confirmation appears only after Google returns success.

## Images and labels
Supplied images are in `assets/families`. Kathy’s transparent cutout is `kathy-transparent.png`. Childhood Hemant remains a placeholder. Kylie, Maman, and Shashank have generic “Family” relationships pending confirmation. Labels and content are in index.html; colors and responsive styling are in style.css.

Blue denotes Kathy’s family; antique gold #e7c98e denotes Hemant’s. The family-worlds.png backdrop was generated using the built-in image tool: watercolor Hong Kong harbor and Bangalore landmarks with a botanical border and open foreground.

## Languages
The entry dialog offers English and Traditional Chinese on each page load. The header language button reopens it without clearing RSVP input. Both languages share the same page, styles, form controls, and submission values. Edit Chinese wording in `language.js`. The invitation image and full-size link switch between the original English artwork and `assets/invitation-chinese.png` with the selected language.

## Local smoke check
Run `python3 -m http.server 8000` from this folder, then open `http://localhost:8000/tests/language.html`. The check intercepts all RSVP requests locally and verifies language switching, preserved input, dietary rules, payload values, retry IDs, and success/failure states without sending data to Google.
