import math
import turtle
import random

# Starter Code
def randomTurtle():
    for count in range(10):
        choice = random.randint(1,2)
        if (choice==1):
            turtle.forward(random.randint(5, 50))
        elif(choice==2):
            turtle.right(random.randint(1,359))
    print(distance())

def distance():
    return f"{math.dist((turtle.xcor(), turtle.ycor()), (0, 0)):.{2}f}"

def testTurtle():
    turtle.forward(100)
    turtle.left(90)
    turtle.forward(100)
    print(distance())

# Call this when turning it in
# randomTurtle()

# Call this when testing to make sure you have the correct answer
testTurtle()