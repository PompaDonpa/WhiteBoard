-- speedodevo

solution (x:[]) = 0
solution (x:y:xs)
  | x < y = solution (y:xs)
  | otherwise = x-y+1 + solution (x+1:xs)


-- dee

solution (x:y:z) = d - y + solution (d:z)
    where d = max (x+1) y
solution _ = 0


-- arnaldur_b

solution [] = 0
solution (_:[]) = 0
solution (a:b:re)
    | a < b     = 0 + solution (b:re)
    | otherwise = d + solution (b+d:re)
    where d = 1 + a - b


-- kokotchy

solution :: [Int] -> Int
solution [] = 0
solution [_] = 0
solution (x:y:xs)
    | x < y = solution (y:xs)
    | x >= y = delta + solution ((y+delta):xs)
    where
        delta = abs (x-y) + 1