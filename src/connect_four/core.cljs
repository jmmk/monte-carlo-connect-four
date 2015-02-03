(ns connect-four.core
  (:require [clojure.browser.repl :as repl]))

(defrecord Board [rows columns state])

(defn board
  "Returns a Board record with <rows> rows, <columns> columns,
  and a vector of <columns> vectors representing the board state"

  ([] (board 6 7))
  ([rows columns] (Board. rows columns (vec (for [_ (range columns)] []))))
  ([rows columns state] (Board. rows columns state)))

(defn is-valid? [board column]
  "Check if move is valid for the current board state:
    - Is it within the column range?
    - Does that column have any space?"

  (let [{:keys [rows columns state]} board]
    (if (and (<= 0 column columns)
             (< (count (state column)) rows))
      true
      false)))

(defn play [board column player]
  "Return a new board with <player> piece added to <column> if the move is valid
  otherwise return the initial board"

  (let [{:keys [rows columns state]} board
        pieces (state column)]
    (if (is-valid? board column)
      (Board. rows columns (assoc state column (conj pieces player)))
      board)))

(defn check-position [state player x y]
  "Checks to see if <x>, <y> is occupied by <player>"

  (= (get-in state [x y]) player))

(defn check-line
  "Check in a single direction if there are 4 pieces in a row from <player>"

  ([player state x y step-x step-y]
   (check-line player state x y step-x step-y 1))
  ([player state x y step-x step-y consecutive-count]
   (let [next-x (+ x step-x)
         next-y (+ y step-y)
         next-count (inc consecutive-count)]
     (if (>= consecutive-count 4)
       true
       (if (check-position state player next-x next-y)
         (check-line player state next-x next-y step-x step-y next-count)
         false)))))

(defn check-lines [player state x y]
  "Adapted from http://stackoverflow.com/a/4636632

  Check in each direction from <x>, <y> to see if there are
  4 pieces in a row from <player>"

  (or (check-line player state x y 1 0)
      (check-line player state x y 0 1)
      (check-line player state x y 1 1)
      (check-line player state x y -1 1)))

(defn winning-board? [board player]
  "Return boolean whether <player> has four in a row"

  (let [{:keys [rows columns state]} board]
    (some true? (for [x (range columns)
                      y (range rows)
                      :when (check-position state player x y)]
                  (check-lines player state x y)))))
