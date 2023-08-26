def bubblesort(arr):
    lenghts = len(arr)
    for i in range(lenghts):
        for j in range(0,lenghts-i -1):
            if arr [j]> arr[j+1]:
              arr[j], arr[j+1]  = arr[j+1], arr[j]

arr = [15,85,100,66,12,1]

bubblesort(arr)
print(arr)