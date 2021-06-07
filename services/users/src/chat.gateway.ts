import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(3001, {
  namespace: '/chatting',
  secure: true,
  rejecetUnauthorized: true,
})
export class ChatGateway implements OnGatewayInit {
  @WebSocketServer()
  server;

  afterInit(server: any) {
    console.log('Initialized');
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): string {
    this.server.emit('message', message);
    return 'Hello worldssss';
  }
}
