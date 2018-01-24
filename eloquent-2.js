// Eloquent Javascript Chapter 2 exercise solutiones
//

/*
Looping a Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

// Looping a Triangle
var triangleOutPut = "#";
while (triangleOutPut.length <= 7) {
    console.log(triangleOutPut);
    triangleOutPut = triangleOutPut + "#";
}

