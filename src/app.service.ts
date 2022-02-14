import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDocs(str: string): string {
    return 'Hello dddooccss!' + str;
  }
}
