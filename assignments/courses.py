print("Welcome to class registration")

def printCourses(courses):
    print("You are currently taking these courses:")
    for i in range(len(courses)): # Print user courses
        print(str(i + 1) + ". " + courses[i])
    print("")

courses = [] # Establish a list for courses
uInput = input("What courses would you like to take?\nCourses: ") # User inputs a course code
courses = uInput.split(",")
for i in range(len(courses)):
    courses[i] = courses[i].strip().capitalize()

printCourses(courses)

# If user has 5 courses, we wont run or we'll break out of the while loop
while (len(courses) != 5):
    newCourses = []
    if (len(courses) < 5): # When user has less than 5 courses
        uInput = input("What courses would you like to take?\nCourses: ")
        newCourses = uInput.split(",")
        for i in range(len(newCourses)):
            newCourses[i] = newCourses[i].strip().capitalize()
            courses.append(newCourses[i])
        printCourses(courses)
    else: # When user has more than 5 courses
        uInput = input("What courses would you like to drop?\nCourses: ")
        newCourses = uInput.split(",")
        for i in range(len(newCourses)):
            newCourses[i] = newCourses[i].strip().capitalize()
        for i in range(len(newCourses)):
            if (newCourses[i] in courses):
                droppedCourse = courses.index(newCourses[i])
                courses.pop(droppedCourse)
        printCourses(courses)