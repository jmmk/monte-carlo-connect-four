(ns connect-four.frontend
  (:require [reagent.core :as reagent :refer [atom]]
            [connect-four.core :as cf])
  (:import [goog.math Long]))

(def state (atom {:boards (cf/new-boards)
                  :player 1
                  :winner nil}))

(def pieces ["_" "RED" "BLACK"])

(defn drop-piece [column]
  (swap! state cf/play column))

(defn player-click [column]
  (let [{:keys [player]} @state]
    (when (= player 1)
      (drop-piece column))))

(add-watch state :ai
  (fn [key atom old-state new-state]
    (when (= (:player new-state) 2)
      (let [best-move (cf/find-best-move new-state)]
        (drop-piece (best-move 0))
        (.log js/console "Win Percentage: " (val best-move))))))

(defn cell [text column row]
  ^{:key (str row column)}[:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}
        :on-click #(player-click column)}
   [:p text]])

(defn game-board []
  (let [{:keys [boards]} @state
        {:keys [rows columns state]} (boards 0)]
    [:table {:style {:border-collapse "collapse"}}
     (doall (for [row (range (dec rows) -1 -1)]
              ^{:key row}[:tr
               (doall (for [column (range columns)]
                        [cell (pieces (get (state column) row 0)) column row]))]))]))

(reagent/render-component [game-board]
                          (.-body js/document))
