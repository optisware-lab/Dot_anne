# Rating evidence

Source: live Google Maps listing "DOT ANNE HOME LODGE"
(place id 0x10207f048a6b1501:0x61dc78658b8e6b25, Plus Code P275+W52 BOST ROAD, Tema),
read in the in-app browser on 2026-10-26 during research.

Page text as captured (document.body.innerText, excerpt):

```
DOT ANNE HOME LODGE
4.2
(47)·Hotel
...
P275+W52 BOST ROAD, Tema
024 349 0990
...
Photos
35 Photos
...
Hotel details
Free breakfast
Free parking
Accessible
Air-conditioned
...
4.2
47 reviews
```

This matches `site.rating` in `src/config/site.ts` (value 4.2, count 47, asOf October 2026) and the
figure the owner supplied in the brief. A screenshot could not be taken: Google Maps does not render
its place panel in headless Chrome or while the app's browser pane is hidden.
