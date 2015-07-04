(ns connect-four.ui.views
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]
            [clojure.string :as string]))

(def pieces {:empty [:span {:style {:color "black"}} "_"]
             :red [:span {:style {:color "red"}} "RED"]
             :black [:span {:style {:color "black"}} "BLACK"]})

(defn cell [color column]
  [rc/border
   :border "1px solid black"
   :width "60px"
   :height "60px"
   :attr {:on-click #(rf/dispatch [:player-click column])}
   :child [rc/box
           :child (get pieces color)]])

(defn winner-display []
  (let [winner (rf/subscribe [:winner])]
    (fn []
      (when (some? @winner)
        [rc/title
         :label (str (string/capitalize (name @winner)) " wins!")
         :level :level1]))))

(def difficulty-settings [{:label "Easy"
                           :value :easy}
                          {:label "Intermediate"
                           :value :intermediate}
                          {:label "Hard"
                           :value :hard}
                          {:label "Expert"
                           :value :expert}])

(defn settings-form []
  (let [selected (rf/subscribe [:difficulty])]
    (fn []
      [rc/v-box
       :children [(doall (for [{:keys [label value]} difficulty-settings]
                           ^{:key value}
                           [rc/radio-button
                            :model @selected
                            :label label
                            :value value
                            :on-change #(rf/dispatch [:change-difficulty value])]))]])))

(defn board-row [row columns state]
  [rc/h-box
   :children [(doall (for [column (range columns)]
                       ^{:key column}
                       [cell (get (state column) row :empty) column]))]])

(defn game-board []
  (let [board (rf/subscribe [:game-board])]
    (fn []
      (let [{:keys [rows columns state]} @board]
        [rc/v-box
         :children [(doall (for [row (range (dec rows) -1 -1)]
                             ^{:key row}
                             [board-row row columns state]))]]))))
(defn connect-four-app []
  [rc/h-box
   :gap "20px"
   :margin "20px"
   :width "50%"
   :align :center
   :children [[rc/v-box
               :gap "20px"
               :align :center
               :children [[winner-display]
                          [game-board]
                          [rc/button
                           :label "New Game!"
                           :on-click #(rf/dispatch [:new-game])]]]
              [settings-form]]])
