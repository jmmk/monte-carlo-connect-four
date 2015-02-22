(ns connect-four.core
  (:require [clojure.browser.repl :as repl]))

(defrecord Board [rows columns state bits])

(def full-bit-board [0 1 2 3 4 5
                     7 8 9 10 11 12
                     14 15 16 17 18 19
                     21 22 23 24 25 26
                     28 29 30 31 32 33
                     35 36 37 38 39 40
                     42 43 44 45 46 47])

(defn board
  "Returns a Board record with <rows> rows, <columns> columns,
  a vector of <columns> vectors representing the board state,
  and an integer whose bits also represent the board state"

  ([] (board 6 7))
  ([rows columns] (Board. rows columns (vec (for [_ (range columns)] [])) 0))
  ([rows columns state] (Board. rows columns state 0)))

(defn new-boards []
  "Returns a vector of a game board and two players' bit boards (a single 64-bit integer)"

  [(board) 0 0])

(defn opposite-player [player]
  (if (= player 1)
    2
    1))

(defn is-valid? [board column]
  "Check if move is valid for the current board state:
    - Is it within the column range?
    - Does that column have any space?"

  (let [{:keys [rows columns state]} board]
    (if (and (<= 0 column columns)
             (< (count (state column)) rows))
      true
      false)))

(defn bit-insert [bits x y]
  (bit-set bits (+ y (* x 7))))

(defn play [boards column player]
  "Return new boards with <player> piece added to <column> and the correct bit added
  to both the game board's bit-board and the player's bit-board"

  (let [game-board (boards 0)
        {:keys [state bits]} game-board
        pieces (state column)
        row (count pieces)]
    (assoc boards
           0 (assoc game-board
                    :state (assoc state column (conj pieces player))
                    :bits (bit-insert bits column row))
           player (bit-insert (boards player) column row))))

(defn full? [bits]
  (every? #(bit-test bits %) full-bit-board))

(defn bit-check [c x]
  (bit-and c (bit-shift-right c x)))

(defn winning-board? [bits]
  "Return boolean whether player has four in a row"

  (let [coords (mapv (partial bit-check bits) [6 7 8 1])]
    (if (zero? (apply bit-or (map bit-check coords [12 14 16 2])))
      false
      true)))

(defn haswon? [bits]
  (let [a (bit-and bits (bit-shift-right bits 6))
        b (bit-and bits (bit-shift-right bits 7))
        c (bit-and bits (bit-shift-right bits 8))
        d (bit-and bits (bit-shift-right bits 1))]
    (cond (not (zero? (bit-and a (bit-shift-right a 12)))) true
          (not (zero? (bit-and b (bit-shift-right b 14)))) true
          (not (zero? (bit-and c (bit-shift-right c 16)))) true
          (not (zero? (bit-and d (bit-shift-right d 2)))) true
          :else false)))

(defn random-move [board]
  "Returns a random column from all non-full columns"

  (let [{:keys [rows state]} board
        valid-columns (keep-indexed #(if (< (count %2) rows) %1) state)]
    (rand-nth valid-columns)))

(defn random-move-set [board]
  (let [{:keys [rows columns state]} board]
    (loop [column-range (range columns)]
      (let [move (rand-nth column-range)]
        (if (< (count (state move)) rows)
          move
          (recur (remove #{move} column-range)))))))


(defn simulate [boards player]
  "Chooses random moves for each player until a winner is found or the board is full."

  (loop [current-boards boards
         current-player player]
    (let [bits (current-boards current-player)]
      (cond (haswon? bits) current-player
            (full? bits) false
            :else (let [next-move (random-move-set (current-boards 0))
                        next-player (opposite-player current-player)
                        next-boards (play current-boards next-move next-player)]
                    (recur next-boards next-player))))))

(defn find-best-move [boards player]
  (loop [results {:total 0}
         num-iters 5000]
    (if (zero? num-iters)
      results
      (let [{:keys [total]} results
            next-move (random-move-set (boards 0))
            next-boards (play boards next-move player)
            winner (or (simulate next-boards player) :draw)
            wins (or (get-in results [next-move winner]) 0)]
        (recur (-> results
                   (assoc :total (inc total))
                   (assoc-in [next-move winner] (inc wins))) (dec num-iters))))))

; (.log js/console (find-best-move (new-boards) 1))


