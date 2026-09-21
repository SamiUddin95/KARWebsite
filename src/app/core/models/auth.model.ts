import { UserRole } from '@core/enums/app.enums';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  role: UserRole;
}

export interface LoginResponse {
  status: string;
  data: UserData;
  statusCode: number;
  errorMessage: string | null;
}

export interface UserData {
  userId: number;
  userType: string | null;
  fullName: string;
  token: string;
  expiresUtc: string;
  expiresLocal: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  statusCode: number;
  errorMessage: string | null;
}
