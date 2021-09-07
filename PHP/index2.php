<?php

// GRASSHOPPER - Terminal game combat function

// Create a combat function that takes the player's
// current health and the amount of damage recieved, 
// and returns the player's new health. Health can't be 
// less than 0.

function combat($health, $damage) {
    return $health < $damage ? 0 : $health - $damage;
  }

class MyTestCases extends TestCase {
      public function testSample() {
        $this->assertSame(95, combat(100, 5));
        $this->assertSame(84, combat(92, 8));
        $this->assertSame(0, combat(20, 30));
      }
  }

// INVERT VALUES

// Given a set of numbers, return the additive inverse of 
// each. Each positive becomes negatives, and the 
// negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not 
// mutate the input array/list.

function invert(array $a): array {
    foreach ($a as &$n) {
      $n *= -1;
    }
    return $a;
  }

//   option2 
function invert($a): array{
    // count — Cuenta todos los elementos de un array o algo de un objeto
    for ($i = 0; $i < count($a); $i++) { 
      $a[$i] = $a[$i]*(-1);
    }
    return $a;
  }

//Ejemplo de count() recursivo
  $comida = array('frutas' => array('naranja', 'plátano', 'manzana'),
                  'verduras' => array('zanahoria', 'col', 'guisante'));
  
  // Cuenta recursiva
  echo count($comida, COUNT_RECURSIVE); // muestra 8
  
  // Cuenta normal
  echo count($comida); // muestra 2

// COUNT THE DIVISORS OF A NUMBER

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors($4)  == 3  // 1, 2, 4
// divisors($5)  == 2  // 1, 5
// divisors($12) == 6  // 1, 2, 3, 4, 6, 12
// divisors($30) == 8  // 1, 2, 3, 5, 6, 10, 15, 30

function divisors(int $n) {
  $count = 0;
  for($i = 1; $i <= $n; $i++) {
    if ($n % $i == 0) {
      $count++;
    }
  }
  return $count;
}

class MyTestCases extends TestCase {
  public function testBasicTests() {
    $this->assertEquals(1, divisors(1));
    $this->assertEquals(4, divisors(10));
    $this->assertEquals(2, divisors(11));
    $this->assertEquals(8, divisors(54));
    $this->assertEquals(7, divisors(64));
  }
}


/*
  number(array $bus_stops) receives an array made of arrays where:
  [0] => People count that entered the bus
  [1] => People count that left the bus
*/

function number(array $bus_stops) {


// NUMBER OF PEOPLE IN THE BUS

// You are provided with a list (or array) of integer 
// arrays (or tuples). Each integer array has two items 
// which represent number of people get into bus (The 
// first item) and number of people get off the bus (The 
// second item) in a bus stop.

// Your task is to return number of people who are still 
// in the bus after the last bus station (after the last array)
 
// FASTEST OPTION
function number($bus_stops) {
  foreach ($bus_stops as $v) {
    $res += $v[0] - $v[1];
  }
  return $res;
}

// EXTENDED AND EXPLAINED OPTION
// First we set the initial people count, wich is 0
  $current = 0;
  /*
  Then we loop throught the bus stops adding the people who entered,
  and subtracting the people who exited.
  If any of the values are not integer, false is returned.
  */
  foreach ($bus_stops as $stop){
    if (!is_int($stop[0]) || !is_int($stop[1])){
      return false;
    }
    
    $current += $stop[0];
    $current -= $stop[1];
  }
  
  // If for some reason the count stops lower than 0, the function returns false
  if ($current < 0){
    return false;
  }
  
  // If the counter stops at 0 or greater, the function returns the counter value
  return $current;
}

// OPPOSITES ATRACT
// Timmy & Sarah think they are in love, but around where 
// they live, they will only know once they pick a flower 
// each. If one of the flowers has an even number of 
// petals and the other has an odd number of petals it 
// means they are in love.

// Write a function that will take the number of petals 
// of each flower and return true if they are in love and 
// false if they aren't.

function lovefunc($flower1, $flower2) {
  return ($flower1 + $flower2) % 2 > 0;
}

// SURFACE AREA and VOLUME of a box

// Write a function that returns the total surface area 
// and volume of a box as an array: [area, volume]

function getSize($width, $height, $depth) : array {
  $surface_area = (($width*$height)*2) + (($depth*$height)*2) + (($depth*$width)*2);
  $volume = $width * $height * $depth;

  return [$surface_area, $volume];
}

function getSize($width, $height, $depth) {
  return [2*($height*$width) + 2*($height*$depth) +2*($width*$depth),$height*$width*$depth];
 }


//  ALTERNATE CAPITALIZATION

// Given a string, capitalize the letters that occupy 
// even indexes and odd indexes separately, and return as 
// shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
// See test cases for more examples.

// The input will be a lowercase string with no spaces.

// OPTION 1
function capitalize($s) {
  for($i = 0; $i < strlen($s); $i++){
      if($i % 2 == 0){
          $result[0] .= strtoupper($s[$i]);
          $result[1] .= $s[$i];
      } else {
          $result[0] .= $s[$i];
          $result[1] .= strtoupper($s[$i]);
      }
      
  }
  return $result;
}

// OPTION 2

function capitalize($string) {
  $array = str_split($string);
  $even = [];
  $odd = [];
  
  foreach($array as $key => $value) {
    if ($key & 1) {
      $odd[] = strtoupper($value);
      $even[] = $value;
    } else {
      $even[] = strtoupper($value);
      $odd[] = $value;      
    }      
  }
  
  return [implode($even), implode($odd)];

}

// BETTER THAN AVERAGE

// You want to know if you're better than the average 
// student in your class.

// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!

// Return True if you're better, else False!

// (HOWTO MEDIA: suma los números, después divide por cuántos números hay)
// OPCION 1
function betterThanAverage($classPoints, $yourPoints) {
  $average = (array_sum($classPoints) + $yourPoints) / (count($classPoints) + 1);
   if ($average < $yourPoints){
       return TRUE;
   }else{
       return FALSE;
   }
 }

//  OPCION 2
 function betterThanAverage($class, $yourPoints) {
  return $yourPoints > (array_sum($class) / count($class)) ? true : false;
}
 
// TERMINAL GAME MOVE FUNCTION

// In this game, the hero moves from left to right. The 
// player rolls the dice and moves the number of spaces 
// indicated by the dice TWO TIMES.

// Create a function for the terminal game that takes 
// the current position of the hero and the roll (1-6) 
// and return the new position.

// Example:
// move(3, 6) should equal 15

function move($pos, $roll) {
  return $pos + $roll * 2;
}