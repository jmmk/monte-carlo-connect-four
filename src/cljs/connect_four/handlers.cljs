(ns connect-four.handlers
  (:require [connect-four.state :refer [default-value valid-schema?]]
            [connect-four.engine :as cf]
            [re-frame.core :refer [dispatch register-handler debug after path trim-v]]))

(enable-console-print!)

(def difficulties {:easy 100
                   :intermediate 1000
                   :hard 5000
                   :expert 10000})


;; -- Middleware --------------------------------------------------------------
(def standard-middlewares
  [trim-v
   (when goog.DEBUG [debug (after valid-schema?)])])

;; -- Helpers -----------------------------------------------------------------


;; -- Handlers ----------------------------------------------------------------

(register-handler
  :new-game
  (fn  [db _]
    (default-value (get-in db [:config :difficulty]))))

(register-handler
  :player-click
  [standard-middlewares]
  (fn [db [column]]
    (let [{:keys [player boards winner]} db]
      (if (and (= player :red)
               (nil? winner)
               (cf/is-valid? (:game-board boards) column))
        (do (dispatch [:ai])
            (cf/play db column))
        db))))

(register-handler
  :change-difficulty
  [standard-middlewares]
  (fn [db [difficulty]]
    (assoc-in db [:config :difficulty] difficulty)))

(register-handler
  :ai
  [standard-middlewares]
  (fn [db _]
    (if (nil? (:winner db))
      (let [difficulty ((get-in db [:config :difficulty]) difficulties)
            best-move (cf/find-best-move db :black difficulty)]
        (println "Win Percentage: " (:percentage best-move))
        (cf/play db (:column best-move)))
    db)))

