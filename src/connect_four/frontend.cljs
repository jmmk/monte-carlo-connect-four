(ns connect-four.frontend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [connect-four.core :as cf]
            [cljs.core.async :refer [put! take! <! chan]])
  (:import [goog.math Long]))

(def state (atom {:boards (cf/new-boards)
                  :player 1
                  :winner nil}))

(def ai-chan (chan))

(def pieces ["_" "RED" "BLACK"])

(defn drop-piece [column]
  (swap! state cf/play column))

(defn player-click [column]
  (let [{:keys [player]} @state]
    (when (and (= player 1)
               (nil? (:winner @state)))
      (drop-piece column))))

(add-watch state :ai
  (fn [key atom old-state new-state]
    (when (= (:player new-state) 2)
      (put! ai-chan "run"))))

(go (while true (when (= "run" (<! ai-chan))
                         (let [best-move (cf/find-best-move @state)]
                           (drop-piece (best-move 0))
                           (.log js/console "Win Percentage: " (val best-move))))))

(defn cell [text column row]
  ^{:key (str row column)}[:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}
        :on-click #(player-click column)}
   [:p text]])

(defn game-board []
  (let [{:keys [boards winner]} @state
        {:keys [rows columns state]} (boards 0)]
    [:div
     (when (some? winner)
       [:div [:h1 (str "Player " winner " wins!")]])
     [:table {:style {:border-collapse "collapse"}}
      (doall (for [row (range (dec rows) -1 -1)]
               ^{:key row}[:tr
                           (doall (for [column (range columns)]
                                    [cell (pieces (get (state column) row 0)) column row]))]))]]))

(reagent/render-component [game-board]
                          (.-body js/document))
