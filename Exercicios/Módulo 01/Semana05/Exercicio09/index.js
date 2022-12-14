function sleep ( num ) {
    return new Promise ( (res) => { 
       setTimeout(() => res(num*num), 5000);
    });
  }

  sleep(4).then((res) => console.log(res));