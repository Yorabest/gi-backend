function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };  

    return Promise.resolve(fruits[name])
}

// getFruit('strawberry')
// .then(res =>console.log(res))

async function makeSmoothie() {
try {
      const strawberry = await getFruit('strawberry');
console.log(strawberry);
    const kiwi = await getFruit('kiwi');
    console.log(kiwi);
} catch (error) {
    console.log(error);
}
  
    // getFruit('strawberry')
    //     .then(res => console.log(res));
    // getFruit('kiwi')
    //     .then(res => console.log(res));
    
}

makeSmoothie()