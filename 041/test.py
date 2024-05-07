import time

def endroll(lines):
    for line in lines:
        print(line)
        time.sleep(1)

lines = ["a", "b", "c"]
endroll(lines)
