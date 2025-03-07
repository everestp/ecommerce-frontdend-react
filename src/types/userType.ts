
 export enum UserRole {
    ROLE_CUSTOMER = 'ROLE_CUSTOMER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_SELLER = 'ROLE_SELLER',
  }
  
  // Interface for Address
   export interface Address {
    id?: number;
    name: string;
    mobile: string;
    pinCode: string;
    address: string;
    locality: string;
    city: string;
    state: string;
  }





export interface User {
    id?: number;
    password?: string;
    email: string;
    fullName: string;
    mobile?: string;
    role: UserRole;
    addresses?: Address[];
  }
  
  // Define the UserState interface
   