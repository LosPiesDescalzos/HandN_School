import { Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';


@WebSocketGateway({
  cors: {
    origin: '*',
    transports: ['websocket'],
  },
})
// @Injectable()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;


  @SubscribeMessage('newProduct')
  async handleMessage(client: Socket, payload: any){
    console.log('payload');

    const answer = {
      productId: payload.id,
      productName: payload.name,
      productPrice: payload.price,
      productDescription: payload.description,
      productCount: payload.count
    };

    this.server.emit('newProduct', answer);
  }

  async afterInit(server: Server) {
    console.log('init');
  }

  async handleDisconnect(client: Socket) {
    console.log('client disconnected: ' + client.id);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log('client connected: ' + client.id);
  }
}