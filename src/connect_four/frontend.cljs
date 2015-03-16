(ns connect-four.frontend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [connect-four.core :as cf]
            [cljs.core.async :refer [put! <! chan]]
            [clojure.string :as string])
  (:import [goog.math Long]))

(enable-console-print!)

(def game-state (atom (cf/new-state)))

(def config (atom {:difficulty :hard}))

(def ai-chan (chan))

(def pieces {:empty [:span {:style {:color "black"}} "_"]
             :red [:span {:style {:color "red"}} "RED"]
             :black [:span {:style {:color "black"}} "BLACK"]})

(def difficulties {:easy 100
                   :intermediate 1000
                   :hard 5000
                   :expert 10000})

(defn drop-piece [column]
  (swap! game-state cf/play column))

(defn player-click [column]
  (let [{:keys [player boards]} @game-state]
    (when (and (= player :red)
               (nil? (:winner @game-state))
               (cf/is-valid? (:game-board boards) column))
      (drop-piece column))))

(add-watch game-state :ai
  (fn [key atom old-state new-state]
    (when (= (:player new-state) :black)
      (put! ai-chan "run"))))

(go (while true (when (and (= "run" (<! ai-chan))
                           (nil? (:winner @game-state)))
                  (let [difficulty (:difficulty @config)
                        best-move (cf/find-best-move @game-state :black (difficulty difficulties))]
                    (println difficulty)
                    (drop-piece (:column best-move))
                    (println "Win Percentage: " (:percentage best-move))))))

(defn cell [piece column]
  [:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}
        :on-click #(player-click column)}
   piece])

(defn winner-display []
  (let [winner (:winner @game-state)]
    [:div {:style {:height "32px"}}
     [:h1
      (when (some? winner)
        (str (string/capitalize (name winner)) " wins!"))]]))

(defn radio [label name value]
  [:div.radio
   [:label
    [:input {:field :radio :name name :value value}]
    label]])

(def settings-form
   [:div {:id "settings"
            :style {:display "inline-block"}}
      [:div {:id "difficulty"}
       (radio "Easy" :difficulty :easy)
       (radio "Intermediate" :difficulty :intermediate)
       (radio "Hard" :difficulty :hard)
       (radio "Expert" :difficulty :expert)]])

(defn game-board []
  (let [{:keys [boards winner]} @game-state
        {:keys [rows columns state]} (:game-board boards)]
    [:div
     [:div {:style {:width "500px"
                    :text-align "center"
                    :display "inline-block"}}
      [winner-display]
      [:table {:style {:margin "auto"
                       :border-collapse "collapse"}}
       (doall (for [row (range (dec rows) -1 -1)]
                [:tr {:key row}
                 (doall (for [column (range columns)]
                          ^{:key (str column row)}
                          [cell (pieces (get (state column) row :empty)) column]))]))]
      [:button {:on-click #(reset! game-state (cf/new-state))
                :style {:margin-top "20px"
                        :font-size "20px"}}
       "New Game!"]]
     [bind-fields
      settings-form
      config]]))

(reagent/render-component [game-board]
                          (.-body js/document))
