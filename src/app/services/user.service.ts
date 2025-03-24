import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'assets/users.json';
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>(this.usersUrl).subscribe((data: User[]) => {
      this.usersSubject.next(data);
    });
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  addUser(user: User): void {
    const currentUsers = this.usersSubject.value;
    const newId = currentUsers.length ? Math.max(...currentUsers.map(u => u.id)) + 1 : 1;
    user.id = newId;
    this.usersSubject.next([...currentUsers, user]);
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.users$.pipe(
      map((users: User[]) => users.find(user => user.id === id))
    );
  }
}
