def mutate_string(string, position, character):
    lstring = list(string)
    lstring[position] = character
    string = ''.join(l)
    return string
