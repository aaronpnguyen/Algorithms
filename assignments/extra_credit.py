# Open file, then close reader
file = open("Lab10.csv", "r")
fileData = file.readlines()
file.close()

# Our 'database
courses = []

# Iterate through dictionary to view whats happening
for item in fileData:
    trimmedData = item.strip().split(',') # Gives us the values in the file in a list cleanly
    courseData = { # Set up dictionary for course data
        "course_code": trimmedData[0],
        "course_name": trimmedData[1],
        "course_credit": trimmedData[2],
        "teacher": trimmedData[3],
        "grade": trimmedData[4]
    }
    courses.append(courseData) # Save course data into our 'database'

#print each item in our database
for course in courses:
    print(course)