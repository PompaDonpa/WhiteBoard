;; thewayofthecode

(defn solution [inputString] 
    (loop [s inputString]
        (if-let [par (re-find #"\([^()]*\)" s)]
            (let [rep (apply str (reverse (re-find #"[^()]+" par)))]
                (recur (clojure.string/replace s par rep))
            )
            s
        )
    )
)

;; luizsol

(defn solution [inputString] 
  (let [pattern (re-find #"\([^()]*\)" inputString)]
    (println (str pattern))
    (if (nil? pattern)
      inputString
      (solution (clojure.string/replace inputString pattern (clojure.string/reverse (subs pattern 1 (dec (count pattern)))))))))



;; msladecek

(defn solution [inputString]
  (let [matcher (re-matcher #"^(.*?)\(([^()]*)\)(.*?)$" inputString)
        found (re-find matcher)]
    (if (nil? found)
      inputString
      (let [groups (rest found)
            [pre mid post] groups
            mid-reversed (apply str (reverse mid))]
        (solution (apply str (concat pre mid-reversed post)))))))



;; declan_m2

(defn innerMostParens [s]
  (loop [i 0
         n -1]
    (cond
     (= i (count s))  nil
     (= \( (nth s i)) (recur (inc i) i)
     (= \) (nth s i)) [n i]
     :otherwise       (recur (inc i) n))))

(defn solution [inputString]
  (loop [s (seq inputString)]
    (let [a (innerMostParens s)]
      (if (nil? a)
        (apply str s)
        (recur (concat
                (take (first a) s)
                (reverse (take (- (second a) (first a) 1) (drop (inc (first a)) s)))
                (drop (inc (second a)) s)))))))



;; cerejo

(defn solution [i] 
  (if (re-find #"\(" i)
    (solution(clojure.string/replace-first i #"\(\w*\)" (clojure.string/replace (apply str(reverse (re-find #"\(\w*\)" i))) #"[\(,\)]" "")))
    i))