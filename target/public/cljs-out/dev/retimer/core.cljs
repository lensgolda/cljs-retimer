(ns retimer.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def state
  (r/atom {:seconds 0
           :paused true}))

(defn get-start-value []
  (let [input (.getElementById js/document "start-input")
        v (js/parseInt (.-value input))]
    (if-not (js/isNaN v)
      v
      (do
        (js/alert "Not a number")
        (set! (.-value input)  "0")))))

(defn timer-component []
  (fn []
    (when-not (get @state :paused)
      (let [timerID (js/setTimeout #(swap! state update :seconds dec) 1000)]
        (when (<= (get @state :seconds) 0)
          (js/clearTimeout timerID)
          (js/alert "The End")
          (reset! state {:paused true :seconds 0}))))
    (let [start (get @state :seconds)
          add-zero (fn [v] (if (< v 10) (str "0" v) v))
          sec (add-zero (js/Math.floor (rem start 60)))
          min (add-zero (rem (js/Math.floor (/ start 60)) 60))
          hour (add-zero (rem (js/Math.floor (/ start 3600)) 24))
          day (add-zero (js/Math.floor (/ start 86400)))]
      [:div {:id "timer-comp"}
       "Seconds Elapsed: " (str "D: " day " H: " hour " M: " min " S: " sec)])))

(defn submit-button []
  [:button {:id "submit-btn"
            :type "button"
            :on-click #(reset! state {:paused true :seconds (get-start-value)})}
   "Set"])

(defn start-button []
  [:button {:id "start-btn"
            :type "button"
            :on-click (fn []
                        (swap! state update :paused not))}
   (if (:paused @state)
     "Start"
     "Stop")])


(defn start-input []
  [:div
   [:div {:id "input-form"}
    [:input {:id "start-input"
             :type "text"
             :name "start-input"}]
    [submit-button]
    [start-button]]
   [:div [timer-component]]])


(def app (.getElementById js/document "app"))

(r/render [start-input] app)
