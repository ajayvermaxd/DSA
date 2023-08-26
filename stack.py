def stackAddElement(element):
    stackList.append(element)


def stackRetrievElement():
    item = stackList[len(stackList)-1]
    stackList.pop()
    return item
    