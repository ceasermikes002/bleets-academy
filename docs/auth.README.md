 # Authentication System Implementation Guide

## Overview
JWT-based authentication system with user registration, login, and profile management. Supports profile image uploads via Cloudinary.

## Backend API Endpoints

### Authentication Endpoints

1. **Sign Up** (`POST /auth/signup`)
   ```typescript
   // Request
   {
     email: string;
     password: string;
     firstName: string;
     lastName: string;
     phoneNumber: string;
     role?: 'LEARNER' | 'TUTOR' | 'ADMIN';
     profileImage?: File; // Optional, max 5MB
   }
   
   // Response
   {
     user: User;
     token: string;
   }
   ```

2. **Sign In** (`POST /auth/signin`)
   ```typescript
   // Request
   {
     email: string;
     password: string;
   }
   
   // Response
   {
     user: User;
     token: string;
   }
   ```

3. **Get Profile** (`GET /auth/profile`)
   - Requires JWT token in Authorization header
   - Returns user profile data

## Next.js Frontend Implementation

### 1. Setup Authentication Context

Create `src/contexts/AuthContext.tsx`:

```typescript
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignUpData, profileImage?: File) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchProfile(storedToken);
    }
  }, []);

  const fetchProfile = async (authToken: string) => {
    try {
      const response = await axios.get('/api/auth/profile', {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      setUser(response.data);
    } catch (error) {
      logout();
    }
  };

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/auth/signin', { email, password });
    const { token, user } = response.data;
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
  };

  const signup = async (userData: SignUpData, profileImage?: File) => {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    const response = await axios.post('/api/auth/signup', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    const { token, user } = response.data;
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      signup,
      logout,
      isAuthenticated: !!token
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

### 2. Setup API Client

Create `src/lib/axios.ts`:

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### 3. Protected Route Middleware

Create `src/middleware.ts`:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/signup');

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};
```

### 4. Usage Example

```typescript
// In any component
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <img src={user?.profileImage} alt="Profile" />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## Environment Setup

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Security Best Practices

1. Use HTTPS in production
2. Implement CSRF protection
3. Set secure and httpOnly flags for cookies
4. Implement rate limiting
5. Add input validation
6. Implement password strength requirements
7. Add email verification
8. Implement refresh token rotation

## Error Handling

Implement proper error handling for:
- Network errors
- Authentication failures
- Token expiration
- Invalid credentials
- Server errors