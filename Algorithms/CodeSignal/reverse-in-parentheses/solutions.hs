-- vladislav_g3

solution = head . foldr f [""]
    where f ')' xs = "":xs
          f '(' (x:y:xs) = (reverse x ++ y) : xs  
          f c (x:xs) = (c:x):xs


-- andymac-2

import Text.Parsec (parse, (<|>), many, many1, between)
import Text.Parsec.String (Parser)
import Text.Parsec.Char (noneOf, char)

solution :: String -> String
solution s = case parse ripP "" s of
    Right x -> x
    Left x -> error . show $ x

ripP :: Parser String
ripP = concat <$> many (normalP <|> reverseP)

normalP :: Parser String
normalP = many1 (noneOf "()")

reverseP :: Parser String
reverseP = reverse <$> between (char '(') (char ')') ripP


-- intrets.-

import Text.ParserCombinators.Parsec
import Data.Either

parser :: Parser String
parser = concat <$> (many (try p1 <|> p2))

p1 :: Parser String
p1 = do
  char '('
  a <- parser
  char ')'
  return $ reverse a

p2 :: Parser String
p2 = do
  a <- (satisfy (/= ')'))
  return [a]

solution = (\(Right x) -> x) . parse (parser <* eof) ""


-- bubbler

solution :: String -> String
solution s = rev s [] where
    rev [] stk = reverse stk
    rev (')':t) stk = let (s1, s2) = span (/='(') stk in rev t (reverse s1 ++ tail s2)
    rev (h:t) stk = rev t (h:stk)

-- kane

solution = head . foldr ko [""]

ko ')' xs = "" : xs
ko '(' (x:y:ys) = (reverse x ++ y) : ys
ko char (x:xs) = (char:x) : xs