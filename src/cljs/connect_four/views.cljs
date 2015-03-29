(ns connect-four.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as string]))

(def pieces {:empty [:span {:style {:color "black"}} "_"]
             :red [:span {:style {:color "red"}} "RED"]
             :black [:span {:style {:color "black"}} "BLACK"]})

(defn cell [piece column]
  [:td {:style {:border "1px solid black"
                :width "60px"
                :height "60px"}
        :on-click #(dispatch [:player-click column])}
   piece])

(defn winner-display []
  (let [winner (subscribe [:winner])]
    [:div {:style {:height "32px"}}
     [:h1
      (when (some? @winner)
        (str (string/capitalize (name @winner)) " wins!"))]]))

(defn radio [label value selected]
  (let [checked (= value selected)]
    [:div.radio
     [:label
      [:input {:on-change #(dispatch [:change-difficulty value])
               :type :radio
               :value value
               :checked checked}]
      label]]))

(defn settings-form []
  (let [selected (subscribe [:difficulty])]
    [:form {:id "settings"
            :style {:display "inline-block"}}
     [radio "Easy" :easy @selected]
     [radio "Intermediate" :intermediate @selected]
     [radio "Hard" :hard @selected]
     [radio "Expert" :expert @selected]]))

(defn connect-four-app []
  (let [game-board (subscribe [:game-board])
        {:keys [rows columns state]} @game-board]
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
      [:button {:on-click #(dispatch [:new-game])
                :style {:margin-top "20px"
                        :font-size "20px"}}
       "New Game!"]]
     [settings-form]]))
