# Reverse a linked list
 Amazon and Microsoft ask you to show an algorithm that will reverse a singly-linked list, that is, a list that is made of nodes between which there is a unidirectional association as in the following image.

1. to reverse the linked list
2. create method on the linked list class to reverse the order of the pointers.

```javascript
//3. (psuedo code)
make a class Node {
  constructor() {
    this.value;
    this.next;
  }

  make a managing class LinkedList{
constructor() {
  this.head;
  this.tail;
  this.length;
}
get(index) {
  //will get that node in the index position
}

reverse() {
   /*
   // edge cases = 1. empty list(length) or 2.list of one, return {},
  //self for one
  //3. list of two switch head w tail


 // head           tail
  // 0 => 1 => 2 => 3 => null
  // after we call reverse();
// head           tail
// 3 => 2 => 1 => 0 => null

// we can itereate the whole length of the linked list. 0 to length - 1
//
/////get the node of that certain index and save that value as a variable.
/ this is original
length = 4. use 4-1 = 3
get(0) = 0     => change to get(3).value   (length -1) - original
get(1) = 1     => change to get(2).value
get(2) = 2     => change to get(1).value
get(3) = 3    => change to get(0).value

for (let i = 0; i < length; i ++) {
  let original node = get(i) ;

original node value = get(Math.absolute((length -1)- i)).value
this.head = get(length -1);
this.tail = get(0)
}
 }
  return this;
}

  }

```
4. Coded in code.js
5. Walked through
6. Time complexity 0(n^2) space is 0(1)


# The missing value

Amazon and Microsoft ask you to derive an algorithm that will inspect an array of of numbers that contains the values between 0 and the length of the list, inclusive, and find the missing value. For example, you may be given an array that of length 6 that contains

[0, 2, 3, 4, 5, 6]

It is your job to determine that the missing value from the array is 1.

1. place missing integer in array i/o both arrays(same array not specified)
2. loop to iterate, finding if !(i + 1 === num + 1) then splice at i then insert, num + 1
```javascript
//3.
function missInt(array) 
classic for loop {
  make ele at index
  if (i + 1 !== ele + 1) {
    the array.splice(i,0,ele + 1)
  }
}
return array outside loop

```
4.
5. 
6.



# Stack min









# Test a retractable ballpoint pen





# OOParking Lot
