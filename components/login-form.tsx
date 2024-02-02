"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { firestore } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { signIn } from 'next-auth/react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const router = useRouter(); // Create a router instance

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    console.log('Attempting to log in with', { username, password });
  
    try {
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', username));
      const snapshot = await getDocs(q);
  
      if (snapshot.empty) {
        console.log('User not found');
        setLoginError('User not found');
        return;
      }
  
      let loginSuccessful = false;
      let userData = {};
  
      snapshot.forEach(doc => {
        const user = doc.data();
        if (user.password === password) {
          loginSuccessful = true;
          userData = {
            userId: doc.id,
            username: user.username,
            completeName: user.completeName,
            profilePictureURL: user.profilePictureURL,
          };
          console.log('Login successful for user:', user.username);
        }
      });
  
      if (loginSuccessful) {
        // Assuming you want to store the user data in localStorage for now
        // Note: Storing sensitive information in localStorage is not recommended for production applications
        localStorage.setItem('user', JSON.stringify(userData));
  
        // Redirect to /laboratory page
        router.push('/laboratory');
      } else {
        console.log('Incorrect password for username:', username);
        setLoginError('Incorrect password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Login failed. Please try again.');
    }
  };
  

  
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="text-2xl font-semibold tracking-tight">Login</div>
          </DialogTitle>
          <DialogDescription>
            Enter your Username and Password to login.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin}>
          {loginError && <div className="text-red-500 text-sm mb-2">{loginError}</div>}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                className="col-span-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                className="col-span-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button  type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}