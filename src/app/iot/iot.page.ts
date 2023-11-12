import { Component, OnInit } from '@angular/core';

import Blockchain from '../blockchain';
import Block from '../block';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.page.html',
  styleUrls: ['./iot.page.scss'],
})
export class IotPage implements OnInit {

  blockchain: Blockchain;

  socket: WebSocket;

  constructor() {
    this.blockchain = new Blockchain();
    
    this.socket = new WebSocket('ws://localhost:8081'); // Reemplaza 'ws://tu-servidor-socket' con la URL de tu servidor WebSocket

    // Escucha eventos del WebSocket
    this.socket.addEventListener('open', (event) => {
      console.log('Conexión establecida con el servidor WebSocket');
    });

    this.socket.addEventListener('message', (event) => {
      console.log(`Mensaje recibido del servidor: ${event.data}`);

      // Puedes realizar acciones adicionales con el mensaje aquí
    });
    }

  abrirPuerta(){
    const newIndex = this.blockchain.chain.length + 1;
    const newData = "abrir"; // Example data
    const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
    
    const newBlock = new Block(newIndex, newData, '', date, '');
    //prevBlock.index+1,data,prevBlock.hash,prevBlock.date
    this.blockchain.addBlock(newBlock);

    const bloque = this.blockchain.getLatestBlock;

    console.log(newBlock.previousHash);

    


    this.socket.send(JSON.stringify(newBlock));
  }

  ngOnInit() {
    

  }

  

  

}
