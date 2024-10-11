#lang sicp

(define (cube x) (* x x x))
(define (improve y x) (/ (+ (/ x (* y y)) (* 2 y)) 3))
(define (is-good-enough? x y tolerance) (< (abs (- (cube y) x)) tolerance))
(define (cubert-iter x y tolerance)
  (if (is-good-enough? x y tolerance) y (cubert-iter x (improve y x) tolerance))
)

(define (cubert x) (cubert-iter x x 0.0000001))

(cubert 27.0)