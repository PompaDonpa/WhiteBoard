;; diko1
(defn solution [inputArray]
  (loop [[x y & zs] inputArray
         moves 0]
    (cond
      (nil? y) moves
      (< x y) (recur (cons y zs) moves)
      :otherwise (let [diff (inc (- x y))]
                   (recur (cons  (inc x) zs) (+ moves diff))))))


;; ioura_b
(defn red [[last tot] e]
  (let [d (- e last)]
    (if (> d 0)
      [e tot]
      [(+ last 1) (inc (- tot d))])))
  
(defn solution [[h & t]]
  (second (reduce red [h 0] t)))



;; quan_n37
(defn solution [inputArray]
  (first (reduce (fn [[moves prev] curr]
                   (if (< prev curr)
                     [moves curr]
                     [(+ moves (- prev curr) 1) (inc prev)]))
                 [0 Integer/MIN_VALUE]
                 inputArray)))


;; msladecek
(defn step [[accum prev] next]
  (let [diff (- prev next)
        add (if (>= diff 0) (inc diff) 0)]
    [(+ accum add) (+ next add)]))

(defn solution [inputArray]
  (first (reduce step [0 (first inputArray)] (rest inputArray))))

