(ns connect-four.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [goog.dom :as dom]
            [connect-four.views]
            [connect-four.subs]
            [connect-four.handlers]))

(defn mount-root []
  (reagent/render [connect-four.views/connect-four-app] (dom/getElement "app")))

(defn init []
  (rf/dispatch-sync [:new-game])
  (mount-root))
