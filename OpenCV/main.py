import cv2 as cv

img = cv.imread('images/clown-fish.jpg')

cv.imshow('Original', img)
median = cv.medianBlur(img, 5)
cv.imshow('Median', median)
mean = cv.GaussianBlur(img,(5,5),0)
cv.imshow('Mean', mean)
cv.waitKey(0)