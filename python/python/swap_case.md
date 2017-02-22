def swap_case(s):
    swap = list(s)
    swapped = ''
    for x in swap:
        if x == x.upper():
            swapped += x.lower()
        elif x == x.lower():
            swapped += x.upper()
        else:
            swapped += x
    return swapped
