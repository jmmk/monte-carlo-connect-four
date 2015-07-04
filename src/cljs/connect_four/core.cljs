(ns connect-four.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [goog.dom :as dom]
            [connect-four.ui.views]
            [connect-four.ui.subs]
            [connect-four.ui.handlers]))

(defn mount-root []
  (reagent/render [connect-four.ui.views/connect-four-app] (dom/getElement "app")))

(defn ^:export init []
  (rf/dispatch-sync [:new-game])
  (mount-root))
