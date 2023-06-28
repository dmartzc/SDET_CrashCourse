
//Using indexes
function gradeProcessor(grades) {

    grades.forEach((grade, element) => {
        if(grade >= 90 && grade <= 100)
        {
            console.log("Grade: " + grades[element] + " is A")
        }else if(grade >= 80 && grade < 90)
            {
                console.log("Grade: " + grades[element] + " is B")
            }else if(grade >= 70 && grade < 80)
                {  
                    console.log("Grade: " + grades[element] + " is C")
                }else if(grade >= 60 && grade < 70)
                    {
                        console.log("Grade: " + grades[element] + " is D")
                    }else if(grade < 60 && grade >= 0)
                            {
                                console.log("Grade: " + grades[element] + " is F")    
                            }else{
                                console.log(grades[element] + " Outside scope")
                                 }
    })

//Without using indexes (wrong way)
    grades.forEach((grade) => {
        if(grade >= 90 && grade <= 100)
        {
            console.log("Grade: " + grade + " is A")
        }else if(grade >= 80 && grade < 90)
            {
                console.log("Grade: " + grade + " is B")
            }else if(grade >= 70 && grade < 80)
                {  
                    console.log("Grade: " + grade + " is C")
                }else if(grade >= 60 && grade < 70)
                    {
                        console.log("Grade: " + grade + " is D")
                    }else if(grade < 60 && grade >= 0)
                            {
                                console.log("Grade: " + grade + " is F")    
                            }else{
                                console.log(grade + " Outside scope")
                                 }
    })
 
  

//Without using indexes (best way)
 
    for(grade of grades){
        if(grade >= 90 && grade <= 100)
        {
            console.log("Grade: " + grade + " is A")
        }else if(grade >= 80 && grade < 90)
            {
                console.log("Grade: " + grade + " is B")
            }else if(grade >= 70 && grade < 80)
                {  
                    console.log("Grade: " + grade + " is C")
                }else if(grade >= 60 && grade < 70)
                    {
                        console.log("Grade: " + grade + " is D")
                    }else if(grade < 60 && grade >= 0)
                            {
                                console.log("Grade: " + grade + " is F")    
                            }else{
                                console.log(grade + " Outside scope")
                                 }
    }
}
  // Ejemplo
gradeProcessor([90, 95, 80, 96, 76, 74, 102, 86, 100, 67, 40, 88, 69, 70, -1, 98])


