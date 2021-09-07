<?php
// Sum without highest and lowest number 
 
// Sum all the numbers of the array  except the
// highest and the lowest element 
// (the value, not the index!).
//  Example:

//  { 6, 2, 1, 8, 10 } => 16
//  { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.

// OPTION1:
function sumArray($array) {
return array_sum($array)-max($array)-min($array);
}

// OPTION2:
function sumArray($array) {
    $return = 0;                     // set default return to 0
    if(count($array) > 1 && $array != null){
        sort($array);                // sort low to high
        array_shift($array);         // remove first element in $array
        array_pop($array);           // remove last element in $array
        $return = array_sum($array); // sum the remaining array values
    }
    return $return;                  // return $return
}

// TEST:
class MyTestCases extends TestCase
{
    public function testExample() {
        $this->assertSame(16, sumArray([6, 2, 1, 8, 10]));
    }
}
// OUTPUT: TRUE (6+2+8=16)

// Abbreviate a Two Word Name

// Write a function to convert a name into 
// initials. This kata strictly takes two words 
// with one space in between them.

// The output should be two capital letters with 
// a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F -->

// OPTION1:
function abbrevName(string $name): string
{
    $divide = explode(' ', $name);
    return strtoupper("{$divide[0][0]}.{$divide[1][0]}");
}

// OPTION2:
function abbrevName($name)
{
  $abbreviate = "";
  $wrds = explode(" ", $name);
  $abbreviate .= strtoupper($wrds[0][0])  "."  strtoupper($wrds[1][0]);
  return $abbreviate;
}

// OPTION3 (awesome):
function abbrevName($name)
{ 
  for($i = 0; $i < strlen($name); $i++)
  {
    if($name[$i] == " ")
    {
        return (strtoupper($name[0]  "."  $name[($i)+1]));
    }
  }
}

class SolutionTest extends TestCase
{
    public function testSampleTests() {
      $this->assertEquals("S.H", abbrevName("Sam Harris"));
      $this->assertEquals("P.F", abbrevName("Patrick Feenan"));
      $this->assertEquals("E.C", abbrevName("Evan Cole"));
      $this->assertEquals("P.F", abbrevName("P Favuzzi"));
      $this->assertEquals("D.M", abbrevName("David Mendieta"));
    }
}


// Total amount of points

// Our football team finished the championship. 
// The result of each match look like "x:y". 
// Results of all matches are recorded in the 
// collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection 
// and counts the points of our team in the 
// championship. Rules for counting points for 
// each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4 
// -->

// OPTION1:
function points(array $games): int {
  $score = 0;
  
  foreach($games as $game) {
    $gameScore = explode(':', $game);
    
    if ($gameScore[0] > $gameScore[1]) {
      $score += 3;
    }
    
    if ($gameScore[0] === $gameScore[1]) {
      $score += 1;
    }
  } 
  
  return $score;
} 

// OPTION2:
function points(array $games): int {
  return array_sum(array_map(function($e) {
      list($x, $y) = explode(':', $e);
      return $x > $y ? 3 : ($x < $y ? 0 : 1);
    }, $games));
}

class MyBasicCases extends TestCase
{
   public function testBasic() {
      $this->assertEquals(30, points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));
      $this->assertEquals(10, points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']));
      $this->assertEquals(0,  points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']));
      $this->assertEquals(15, points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']));
      $this->assertEquals(12, points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']));
   }
}
