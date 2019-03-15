/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;  
  for (let i = 0; i < preferences.length; i++) { 
      const firstSide = preferences[i] - 1;
      if (firstSide == i) continue;
      const secondSide = preferences[firstSide] - 1;
      if (firstSide == secondSide) continue;
      const thirdSide = preferences[secondSide] - 1;
      if (thirdSide == secondSide) continue;
      if (thirdSide == i) {
          count++;
      }
   }
   return count / 3;
};