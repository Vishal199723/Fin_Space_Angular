import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }
    sendName(name: string) {
        this.subject.next({ text: name });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    getMessage1(): Observable<any> {
        return this.subject.asObservable();
    }



    sendSession(usersession: string) {
        this.subject.next({ text: usersession });
    }
    getSession(): Observable<any> {
        return this.subject.asObservable();
    }
}