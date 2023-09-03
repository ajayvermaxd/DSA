# Query: Create an empty list in Python and add elements to it to create an array of integers.
# Demonstrate how to append, insert, and remove elements from the array.


# Create an empty list and add elements to it
arr= []
# Append an element to the array
arr.append(50)
arr.extend[10, 20, 30, 40]
print("after appending", arr)
print()

# Insert an element at a specific index
arr.insert(2, 15)
print("after inserting at specifix location", arr)
print()

# Remove an element by value
arr.remove(30)
print("after removal", arr)
print()

# Calculate the sum of all elements in the array
arr_sum = sum(arr)

print("Updated Array:", arr)
print("Sum of Array Elements:", arr_sum)
