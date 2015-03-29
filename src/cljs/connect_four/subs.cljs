(ns connect-four.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))


;; -- Helpers -----------------------------------------------------------------

;; -- Subscription handlers and registration  ---------------------------------

(register-sub
  :winner
  (fn [state]
    (reaction (:winner @state))))

(register-sub
  :game-board
  (fn [state]
    (reaction (get-in @state [:boards :game-board]))))

(register-sub
  :difficulty
  (fn [state]
    (reaction (get-in @state [:config :difficulty]))))
