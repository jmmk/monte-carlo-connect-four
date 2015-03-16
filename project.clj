(defproject connect-four "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [reagent "0.5.0"]
                 [reagent-forms "0.4.5"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-3058"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]
            [com.cemerick/clojurescript.test "0.3.3"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src" "test"]
              :compiler {:output-to "target/cljs/testable.js"
                         :optimizations :simple}}
             {:id "dev"
              :source-paths ["src"]
              :compiler {
                         :main connect-four.frontend
                         :output-to "out/connect_four.js"
                         :output-dir "out"
                         :optimizations :none
                         :cache-analysis true
                         :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                         :main connect-four.frontend
                         :output-to "out-adv/connect_four.min.js"
                         :output-dir "out-adv"
                         :optimizations :advanced
                         :pretty-print false}}]
    :test-commands {"unit-tests" ["node" :node-runner
                                  "target/cljs/testable.js"]}})
