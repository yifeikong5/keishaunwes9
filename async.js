slowMath.add(6, 2)
  .then(value => {
    console.log(value);
    return slowMath.multiply(value,2)
  }).then((multiply)=>{
      console.log(multiply)
      return slowMath.divide(multiply,4)
  }).then((divide)=>{
      console.log(divide)
      return slowMath.subtract(divide,3)
  }).then((sub)=>{
      console.log(sub)
      return slowMath.add(sub,98)
  }).then((mod)=>{
    console.log(mod)
    return slowMath.remainder(mod,2)
  }).then((mul)=>{
      console.log(mul)
      return slowMath.multiply(mul,50)
  }).then((rem)=>{
      console.log(rem)
      return slowMath.remainder(rem,40)
  }).then((adding)=>{
      console.log(adding)
      return slowMath.add(adding,32)
  }).then((final)=>{
      console.log(`Final result is ${final}`)
  })
  .catch(err => {
    console.log(err);
  });
