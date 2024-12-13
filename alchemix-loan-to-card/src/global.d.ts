// global.d.ts

// Étendre l'interface de BigInt pour inclure la méthode toJSON
declare interface BigInt {
    toJSON(): string;
  }
  