(ns connect-four.state
  (:require [schema.core :as s]
            [connect-four.engine :as cf])
  (:import [goog.math Long]))

(def schema
  {:boards {:game-board cf/Board
            :red Long
            :black Long}
   :player s/Keyword
   :winner (s/maybe s/Keyword)
   :config {:difficulty s/Keyword}})

(defn valid-schema?
  "Validate given state, writing any problems to console.error"
  [state]
  (let [res (s/check schema state)]
    (when (seq res)
      (.error js/console (str "schema problem: " res)))))

(defn default-value [difficulty]
  {:boards (cf/new-boards)
   :player :red
   :winner nil
   :config {:difficulty (or difficulty :hard)}})
