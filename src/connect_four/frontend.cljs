(ns connect-four.frontend
  (:require [reagent.core :as reagent :refer [atom]]
            [connect-four.core :as cf]))

(def boards (atom (cf/new-boards)))
(def pieces ["_" "RED" "BLACK"])

(defn cell [text]
  [:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}}
   [:p text]])

(defn game-board []
  (let [{:keys [rows columns state]} (@boards 0)]
    [:table {:on-click #(swap! boards cf/play (rand-int columns) (inc (rand-int 2)))
             :style {:border-collapse "collapse"}}
     (doall (for [row (range (dec rows) -1 -1)]
              [:tr
               (doall (for [column (range columns)]
                        [cell (pieces (get (state column) row 0))]))]))]))

(reagent/render-component [game-board]
                          (.-body js/document))
