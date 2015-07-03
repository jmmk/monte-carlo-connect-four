(ns connect-four.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as rf]))

(rf/register-sub
  :winner
  (fn [state]
    (reaction (:winner @state))))

(rf/register-sub
  :game-board
  (fn [state]
    (reaction (get-in @state [:boards :game-board]))))

(rf/register-sub
  :difficulty
  (fn [state]
    (reaction (get-in @state [:config :difficulty]))))
