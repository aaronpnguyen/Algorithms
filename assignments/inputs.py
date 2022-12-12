print("Welcome to class registration")

courses = [] # Establish a list for courses
uInput = input("Enter a course code: ") # User inputs a course code

while "EXIT" not in uInput or "exit" not in uInput: # Continuously ask for input until user inputs "exit/EXIT"
    if len(courses) > 5: # Checks if length of courses is greater than accepted
        print("You must delete a course, choose from your list of courses to delete.")
        uDelete = int(input("Course to be deleted: ")) # Delete a course based off of index
        while uDelete < 1 or uDelete > 6: # If user inputs an index that is not in range, re-ask for input
            print("Invalid course number!")
            uDelete = int(input("Course to be deleted: "))
        uDelete -= 1 # Decrement user input to match courses list index
        courses.pop(uDelete) # Delete/pop user's desired index
    courses.append(uInput) # Append user input to courses
    for i in range(len(courses)): # Print user courses
        print(str(i + 1) + ". " + courses[i])
    uInput = input("Enter a course code: ")