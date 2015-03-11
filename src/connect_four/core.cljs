(ns connect-four.core
  (:require [clojure.browser.repl :as repl])
  (:import [goog.math Long]))

(defrecord Board [rows columns state bits])

(def full-bit-board [0  1  2  3  4  5
                     7  8  9  10 11 12
                     14 15 16 17 18 19
                     21 22 23 24 25 26
                     28 29 30 31 32 33
                     35 36 37 38 39 40
                     42 43 44 45 46 47])

; (reduce bit-set 0 full-bit-board)
(def full-bit-board-long (Long.fromNumber 279258638311359))

(defn board
  "Returns a Board record with <rows> rows, <columns> columns,
  a vector of <columns> vectors representing the board state,
  and an integer whose bits also represent the board state"

  ([] (board 6 7))
  ([rows columns] (Board. rows columns (vec (for [_ (range columns)] [])) Long.ZERO))
  ([rows columns state] (Board. rows columns state Long.ZERO)))

(defn new-boards []
  "Returns a vector of a game board and two players' bit boards (a single 64-bit integer)"

  [(board) Long.ZERO Long.ZERO])

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

(defn bit-set-long [bits number]
  (.or bits (.shiftLeft Long.ONE number)))

(defn bit-insert [bits x y]
  (bit-set-long bits (+ y (* x 7))))

(defn bit-check [c x]
  (.and c (.shiftRight c x)))

(defn winning-board? [bits]
  "Return boolean whether player has four in a row"

  (let [a (bit-check bits 6)
        b (bit-check bits 7)
        c (bit-check bits 8)
        d (bit-check bits 1)]
    (cond (not (.isZero (bit-check a 12))) true
          (not (.isZero (bit-check b 14))) true
          (not (.isZero (bit-check c 16))) true
          (not (.isZero (bit-check d 2))) true
          :else false)))

(defn play [game-state column]
  "Return new game-state with <player> piece added to <column>, the correct bit added
  to both the game board's bit-board and the player's bit-board, the player swapped,
  and winner checked"

  (let [{:keys [boards player]} game-state
        game-board (boards 0)
        {board-state :state bits :bits} game-board
        pieces (board-state column)
        row (count pieces)
        updated-player-board (bit-insert (boards player) column row)]
    (assoc game-state
           :boards (assoc boards
                          0 (assoc game-board
                                   :state (assoc board-state column (conj pieces player))
                                   :bits (bit-insert bits column row))
                          player updated-player-board)
           :player (opposite-player player)
           :winner (if (winning-board? updated-player-board)
                     player
                     nil))))

(defn full? [bits]
  (.equals bits full-bit-board-long))

(defn random-move [board]
  "Returns a random column from all non-full columns"

  (let [{:keys [rows columns state]} board]
    (loop [column-range (range columns)]
      (let [move (rand-nth column-range)]
        (if (< (count (state move)) rows)
          move
          (recur (remove #{move} column-range)))))))

(defn simulate [game-state move]
  "Chooses random moves for each player until a winner is found or the board is full."

  (loop [current-state game-state
         current-move move]
    (let [{:keys [winner boards] :as next-state} (play current-state current-move)
          game-board (boards 0)]
      (cond (some? winner) winner
            (full? (:bits game-board)) false
            :else (recur next-state (random-move game-board))))))

(defn find-best-move [game-state]
  (loop [results {:total 0}
         num-iters 5000]
    (if (zero? num-iters)
      results
      (let [{:keys [total]} results
            {:keys [boards player]} game-state
            next-move (random-move (boards 0))
            winner (or (simulate game-state next-move) :draw)
            wins (or (get-in results [next-move winner]) 0)]
        (recur (-> results
                   (assoc :total (inc total))
                   (assoc-in [next-move winner] (inc wins))) (dec num-iters))))))

(def game-state {:boards (new-boards)
                 :player 1
                 :winner nil})
; (.log js/console (find-best-move game-state))


