import * as CryptoJS from 'crypto-js';

class Block {
  constructor(
    public index: number,
    public data: any,
    public previousHash: string,
    public timestamp: string,
    
    public hash: string
  ) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash(): string {


    return CryptoJS.SHA256(
      
      this.index + this.data + this.previousHash + this.timestamp  
      //prevBlock.index+1,data,prevBlock.hash,prevBlock.date
    ).toString();
  }
}

export default Block;
