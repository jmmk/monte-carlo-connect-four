### Play
The latest working version can be played [here](http://jmmk.github.io/monte-carlo-connect-four/).

### Implementation
Uses the bitboard implementation outlined [here](http://programmablelife.blogspot.co.at/2012/09/clojure-connect-four-1-checking-winner.html) and used [here](https://github.com/eigenlicht/clj-connect-four/blob/master/src/clj_connect_four/board.clj) for efficient checking for a winner.

### Development
Run "`lein figwheel`" in a terminal to compile the app. Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

Any changes to ClojureScript source files (in `src`) will be reflected in the running page immediately (while "`lein figwheel`" is running).
