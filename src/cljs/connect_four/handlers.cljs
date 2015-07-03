(ns connect-four.handlers
  (:require [connect-four.state :as db]
            [connect-four.engine :as cf]
            [re-frame.core :as rf ]))

(enable-console-print!)

(def difficulties {:easy 100
                   :intermediate 1000
                   :hard 5000
                   :expert 10000})

(def standard-middlewares
  [rf/trim-v])

(rf/register-handler
  :new-game
  (fn  [db _]
    (db/default-value (get-in db [:config :difficulty]))))

(rf/register-handler
  :player-click
  [standard-middlewares]
  (fn [db [column]]
    (let [{:keys [player boards winner]} db]
      (if (and (= player :red)
               (nil? winner)
               (cf/is-valid? (:game-board boards) column))
        (do (rf/dispatch [:ai])
            (cf/play db column))
        db))))

(rf/register-handler
  :change-difficulty
  [standard-middlewares]
  (fn [db [difficulty]]
    (assoc-in db [:config :difficulty] difficulty)))

(rf/register-handler
  :ai
  (fn [db _]
    (if (nil? (:winner db))
      (let [difficulty ((get-in db [:config :difficulty]) difficulties)
            best-move (cf/find-best-move db :black difficulty)]
        (println "Win Percentage: " (:percentage best-move))
        (cf/play db (:column best-move)))
    db)))
