(ns connect-four.frontend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [connect-four.core :as cf]
            [cljs.core.async :refer [put! <! chan]]
            [clojure.string :as string])
  (:import [goog.math Long]))

(def state (atom (cf/new-state)))

(def ai-chan (chan))

(def pieces {:empty [:span {:style {:color "black"}} "_"]
             :red [:span {:style {:color "red"}} "RED"]
             :black [:span {:style {:color "black"}} "BLACK"]})

(defn drop-piece [column]
  (swap! state cf/play column))

(defn player-click [column]
  (let [{:keys [player boards]} @state]
    (when (and (= player :red)
               (nil? (:winner @state))
               (cf/is-valid? (:game-board boards) column))
      (drop-piece column))))

(add-watch state :ai
  (fn [key atom old-state new-state]
    (when (= (:player new-state) :black)
      (put! ai-chan "run"))))

(go (while true (when (and (= "run" (<! ai-chan))
                           (nil? (:winner @state)))
                         (let [best-move (cf/find-best-move @state :black)]
                           (drop-piece (:column best-move))
                           (.log js/console "Win Percentage: " (:percentage best-move))))))

(defn cell [piece column]
  [:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}
        :on-click #(player-click column)}
   piece])

(defn winner-display []
  (let [winner (:winner @state)]
    [:div {:style {:height "32px"}}
     [:h1
      (when (some? winner)
        (str (string/capitalize (name winner)) " wins!"))]]))

(defn game-board []
  (let [{:keys [boards winner]} @state
        {:keys [rows columns state]} (:game-board boards)]
    [:div
     [winner-display]
     [:table {:style {:border-collapse "collapse"}}
      (doall (for [row (range (dec rows) -1 -1)]
               [:tr {:key row}
                (doall (for [column (range columns)]
                         ^{:key (str column row)}
                         [cell (pieces (get (state column) row :empty)) column]))]))]]))

(reagent/render-component [game-board]
                          (.-body js/document))
