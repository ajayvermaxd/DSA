def insertionsort(arr):
     for i in range(1, len(arr)):
          key = arr[i]
          j = i - 1
          while(j >= 0 and key < arr[j]):
            arr[j + 1] = arr[j]
            j -= 1
          arr[j + 1] = key
arr = [70,65,12,100,95,14]

print(arr)
insertionsort(arr)
print(arr)