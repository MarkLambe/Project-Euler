num = 100;

def getFactorial(num):
    if(num == 1):
        return 1
    else:
        return num * getFactorial(num - 1)

total = 0
for n in list(str(getFactorial(num))):
    total += int(n);
print(total);
