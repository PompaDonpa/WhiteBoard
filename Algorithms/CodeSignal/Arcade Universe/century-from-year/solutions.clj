;; mack
(defn solution [year] 
  (int (/ (+ year 99) 100)))


;; micalevisk
(defn solution [year]
  (int (Math/ceil (/ year 100))))


;; albert_z6
(defn solution [year] 
  (+ (quot (- year 1) 100) 1)
)


;; no_name2
(defn solution 
  [year] 
  (if (> (/ year 100) 
         (int(/ year 100)))
    (+ (int (/ year 100)) 1)
    (int (/ year 100))))