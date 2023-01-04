/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  type CallbackArg = {
    document?: Record<string, any>;
    parent?: Record<string, any>;
    value?: any;
    currentUser: {
      email: string;
      id: string;
      name: string;
      profileImage: string;
      role: string;
      roles: { name: string; title: string; description: string }[];
    };
  };
}
