//generation of numbers
//Verification of multiple numbers of 35 (Nama Team), then of 7 (Team) and last of 5 (Nama)

  const multiples = (n: number, m:number) => n % m === 0;

  const generateNumbers = (): any => {
    return new Array(100).fill(0).map((e, i) => 
    multiples(i+1,35) ? 'Nama Team'
     :multiples(i+1, 7) ? 'Team'
     :multiples(i+1,5) ? 'Nama'
     :(i+1)).join(', ');
  };

 console.log(generateNumbers());