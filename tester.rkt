#lang sicp

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
  guess
  (sqrt-iter (improve guess x) x)
  )
)

(define (improve guess x) (average guess (/ x guess)))
(define (average x y) (/ (+ x y) 2))
(define (good-enough? guess x) (< (abs (- (square guess) x)) 0.001))
(define (square x) (* x x))
(define (sqrt x) (sqrt-iter 1.0 x))

(sqrt 25)
(sqrt 225)
(sqrt 2025)
(sqrt 256)
(sqrt 5050)