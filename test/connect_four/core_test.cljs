(ns connect-four.core-test
  (:require-macros [cemerick.cljs.test :refer [is deftest]])
  (:require [connect-four.core :as cf]
            [cemerick.cljs.test]))

(def board-1 (cf/board 6 7 [[1 1 1 1]
                            []
                            []
                            []
                            []
                            []
                            []]))

(def board-2 (cf/board 6 7 [[1]
                            [1]
                            [1]
                            [1]
                            []
                            []
                            []]))

(def board-3 (cf/board 6 7 [[1]
                            [2 1]
                            [1 2 1]
                            [2 1 2 1]
                            []
                            []
                            []]))

(def board-4 (cf/board 6 7 [[2 1 2 1]
                            [1 2 1]
                            [2 1]
                            [1]
                            []
                            []
                            []]))

(def board-5 (cf/board 6 7 [[1]
                            [1]
                            [1]
                            [2]
                            []
                            []
                            []]))

(def board-6 (cf/board 6 7 [[2 1]
                            [1]
                            [1 2]
                            [2 2]
                            [1 2 1]
                            [1 2]
                            []]))

(def board-7 (cf/board 6 7 [[2 1]
                            [1]
                            [1 2]
                            [1 2]
                            [2 1 2]
                            [1 2 1]
                            [2 1 2 1]]))

(def board-8 (cf/board 6 7 [[2 1 2 1 2 1]
                            [1 2 1 2 1 2]
                            [1 2 1 2 1 2]
                            [1 2 1 1 2 1]
                            [2 1 2 1 2 1]
                            [1 2 1 2 1 2]
                            [2 1 2 2 1 2]]))

(def board-9 (cf/board 6 7 [[2 1 2 1 2 1]
                            [1 2 1 2 1 2]
                            [1 2 1 2 1 2]
                            [1 2 1 1 2 2]
                            [2 1 2 1 2 2]
                            [1 2 1 2 1 2]
                            [2 1 2 2 1 2]]))

(defn player-wins [board winner loser]
  (is (= true (cf/winning-board? board winner)))
  (is (= nil (cf/winning-board? board loser))))

(defn player-1-wins [board]
  (player-wins board 1 2))

(defn player-2-wins [board]
  (player-wins board 2 1))

(defn no-winner [board]
  (is (= nil (cf/winning-board? board 1)))
  (is (= nil (cf/winning-board? board 2))))

(deftest winning-board?
  (player-1-wins board-1)
  (player-1-wins board-2)
  (player-1-wins board-3)
  (player-1-wins board-4)
  (no-winner board-5)
  (player-2-wins board-6)
  (player-1-wins board-7)
  (no-winner board-8)
  (player-2-wins board-9))
