# Array Operations: Write a Python function that takes an array of integers as input and returns the sum of all the elements in the array.
# Optimize the function for large arrays.

def calculate_sum(arr):
    return sum(arr)

my_array = [10, 20, 30, 40, 50]
total_sum = calculate_sum(my_array)
print("Sum of Array Elements:", total_sum)

#without using buildin function

def calculate_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total

# Example:
my_array = [60, 20, 40, 80, 1000]
total_sum = calculate_sum(my_array)
print("Sum of Array Elements:", total_sum)
