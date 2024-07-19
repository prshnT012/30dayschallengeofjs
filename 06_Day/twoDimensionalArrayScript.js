// Task-12 : creation a 2d array matrix ..

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// console.log("2D matrix : "+matrix);

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        process.stdout.write(matrix[i][j] + " ")
    }
    console.log();
}
console.log();



//Task-13 : Accessing and manipulating the element in matrix...

matrix[1][2] = 100
console.log("After manipulating 2nd row and 2nd column of the matrix");

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        process.stdout.write(matrix[i][j] + " ")
    }
    console.log();
}
console.log();
