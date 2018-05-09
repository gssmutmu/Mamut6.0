import { Injectable } from '@angular/core';
import { AppHooks } from 'smartux-client';

@Injectable()
export class Hooks extends AppHooks {

  /**
   * Initial parameters to send to the server.
   */
  async getServerInitParams(): Promise<any> {
    return {};
  }

  /**
   * Initialize the UI with data from the server.
   */
  initializeUI(params: any): void {
  }

  /**
   * Override what happens when going to a new screen.
   */
  overrideStateHandler(oldScreen: string, newScreen: string, data: any): string {
    return newScreen;
  }

  /**
   * Override what happens when a custom URL scheme is called.
   *
   * type - 'event' is currently the only supported type.
   * name - Name of event, e.g. 'login.submit'
   * data - JSON object containing URL data.
   *
   * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
   *          false - Don't continue with the normal flow.
   */
  async interceptCustomURLScheme(type: string, name: string, data: any): Promise<boolean> {
    return true;
  }

}
