QUICK SORT

Explanation:
1. Take an element (usually first or last element) and make it your pivot element.
2. Sort all other elements to the right (less than) or left (greater than) of pointer element.
3. Repeat with next element (furthest left or furthest right) and make that the next pivot point.
4. Sort remaining elements by the new pivot point.
5. Repeat until all elements are sorted.
6. Combine elements back together from the bottom (by less than or greater than) to create a sorted list.

   Ex:            [2, 5, 7, 4, 3, 6]                           COMBINE

   PIVOT 6:                 *6*                             [2, 3, 4, 5, 6, 7]
           [ 2, 5, 4, 3]           [7]

   PIVOT 3:       *3*                                         [2, 3, 4, 5]
            [2]      [5, 4]

   PIVOT 4:            *4*                                      [4, 5]
                            [5]

BEST CASE SCENARIO: logarithmic time. Highly efficient. Operation time decreases as instances increase.
WORSE CASE SCENARIO: quadratic time. Not very efficient. Max operations = square of input.
