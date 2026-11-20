//Basic types
let age: number =  25
let hobby: string = "Soccer";
let isAdult: boolean = true
let fruit: any = "apple"

//arrays
let fruits: string[] = ["apple", "orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1], [2]]

//Tuples
let employee: [number, string] = [1, "Jack"]
let employees: [number, string][] = [
  [2, "sarah"],
  [5, "Jack"]
]

//objects
let car: {
  brand: string, 
  year: number
} = {
  brand: "Lexus", 
  year: 2020
}

//custom types
type Car = {
  brand: string, 
  year: number
}

let car1: Car = {
  brand: "Lexus", 
  year: 2020
}

//Interface
interface Car1 {
  brand: string, 
  year: number
}

let newCar: Car1 = {
  brand: "Lexus", 
  year: 2020
}

//union
let x: string | number = 23

type occupation = "employed" | "student"
let jackOccupation: occupation = "student"

//type assertions
let y: any = "a"
y = <number> 35

//functions
function add(x: number, y: number): number {
  return x + y
}

add(2, 5)

function sayHi(): void {
  console.log("Hi")
}

// sayHi();

//generics

function copyArr<T>(arr: T[]): T[] {
  return [...arr]
}

let numCopy = copyArr<number>([1, 2, 3])
let strCopy = copyArr<string>(["1", "2", "3"])

//Enums
enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very Rare eye color"
}

interface Student {
  name: string,
  age?: number,
  eyeColor: EyeColor,
}

function displayStudent(student: Student): void {
  const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
  document.body.innerText = info
}

displayStudent({
  name: "Jack", 
  age: 20,
  eyeColor: EyeColor.green
})