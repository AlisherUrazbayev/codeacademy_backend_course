// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (number, dnaBases) => {
  return {
    specimenNum: number,
    dna: dnaBases,

    mutate() {
      const baseIndex = Math.floor(Math.random() * 15);
      const base = this.dna[baseIndex];
      const newBase = returnRandBase();
      if(newBase != base) {
        this.dna[baseIndex] = newBase;
      } else {
        console.log("Cannot mutate to same DNA base.");
      }
      return this.dna;
    },
    
    compareDNA(pAequor) {
      let numberOfCommonBases = 0;
      let percentageOfCommonDna = 0;
      let onePercentOfDna = 1 / pAequor.dna.length;
      for(let i = 0; i < pAequor.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]) {
          numberOfCommonBases++;
        }
      }

      percentageOfCommonDna = Math.floor((numberOfCommonBases * onePercentOfDna) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageOfCommonDna}% DNA in common`);
    },

    willLikelySurvive() {
      let numberOFDna = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') {
          numberOFDna++;
        }
      }

      if(numberOFDna / this.dna.length >= 0.6) {
        return true;
      }
      return false;
    }
  }
};


const createInstances = (numberOfInstances) => {
  const instances = [];
  instances.length = numberOfInstances;
  
  for(let i = 0; i < instances.length; i++) {
    let instance = pAequorFactory(i + 1,mockUpStrand());
    if(instance.willLikelySurvive()) {
      instances[i] = instance;
    } else {
      do {
        instance = pAequorFactory(i + 1,mockUpStrand());
      } while (!instance.willLikelySurvive())
      instances[i] = instance;
    }
  }
  
  return instances;
}


const pAequors = createInstances(30);
console.log(pAequors);
console.log(pAequors.length);
for(pAequor of pAequors) {
  console.log(pAequor.willLikelySurvive())
}


let str = 'abc';
str[1] = 'c';
console.log(str);







