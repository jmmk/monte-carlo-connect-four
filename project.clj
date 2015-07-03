(defproject connect-four "0.1.0-SNAPSHOT"
  :description "Connect Four with Monte Carlo AI"
  :url "http://jmmk.github.io/monte-carlo-connect-four/"
  :license {:name "MIT"}

  :source-paths ["src/clj"]

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [bidi "1.20.0"]
                 [ring/ring-core "1.3.2"]
                 [re-frame "0.4.1"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-ring "0.9.6"]
            [lein-figwheel "0.3.5"]]

  :ring {:handler connect-four.handler/handler}

  :clean-targets ^{:protect false} ["assets/js/out"
                                    "assets/js/out-adv"
                                    "assets/js/connect_four.js"]

  :figwheel {:ring-handler connect-four.handler/handler}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:on-jsload "connect-four.core/init"}
                        :compiler {:main "connect-four.core"
                                   :output-to     "assets/js/connect_four.js"
                                   :output-dir    "assets/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "production"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "assets/js/connect_four.js"
                                   :output-dir "assets/js/out-adv"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
