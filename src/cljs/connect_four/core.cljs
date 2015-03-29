(ns connect-four.core
  (:require [reagent.core :as reagent]
            [connect-four.views]
            [connect-four.subs]
            [connect-four.handlers]
            [re-frame.core :refer [dispatch-sync]]))

;; -- Routing -----------------------------------------------------------------

(defn mount-root []
  (reagent/render [connect-four.views/connect-four-app] (.getElementById js/document "app")))

;; -- Initialize app ----------------------------------------------------------
(defn init! []
  (dispatch-sync [:new-game])
  (mount-root))
