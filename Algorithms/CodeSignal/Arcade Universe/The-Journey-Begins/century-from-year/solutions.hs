-- jsw
solution year = (year - 1) `quot` 100 + 1

-- maximus_d
solution year = (year + 99) `div` 100


-- Harrian
solution year = (div (year-1) 100)+ 1


-- kane_
solution year = ceiling $ fromIntegral year / 100 


-- oneboili
solution year | year `mod` 100 == 0 = (year`div` 100)
                     | otherwise = (year`div` 100) + 1


-- jon_c40
solution year = case m of
  0 -> n
  otherwise -> n + 1
  where
    m = year `mod` 100
    n = year `div` 100