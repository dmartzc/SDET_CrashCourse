function findLargest(num1, num2, num3) {
    
    if(num1 > num2)
    {
        largest = num1
        if(num3 > num1)
        {
            largest = num3
        }
        else
        {
            largest = num1
        }
    }else
    {
        if(num2>num3)
        {
            largest = num2
        }
        else
        {
            largest = num3
        }
    }
    
    return largest
}

function findLargest2(n1, n2, n3)
{
    if (n1 >= n2 && n1 >= n3)
    {
        largest = n1
    }
    if (n2 >= n1  && n2 >= n3)
    {
        largest = n2
    }
    if (n3 >= n2 && n3 >= n1)
    {
        largest = n3
    }
    
    return largest

}

console.log(findLargest(21,45,13))
console.log(findLargest2(21,45,13))

console.log(findLargest(34,18,52))
console.log(findLargest2(34,18,52))