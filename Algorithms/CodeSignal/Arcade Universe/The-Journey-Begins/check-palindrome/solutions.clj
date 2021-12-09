;; daniel_j4
(defn solution [p] 
  (= (seq p) (reverse p)))


;; diko1
(defn solution [inputString] 
  (= inputString (clojure.string/reverse inputString)))



;; alexakarpov
(defn solution [inputString]
  (= inputString (apply str (reverse inputString))))
    

;; bstakes
(defn solution
  [x]
  (= x (apply str (reverse x))))


;; wtf99
(defn solution [string]
  (let [len (count string)
        half (quot len 2)]
    (= (subs string 0 half)
       (clojure.string/reverse (subs string (- len half) len)))))


