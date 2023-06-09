import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chats } from 'src/app/content/applications/chat/chats';
import { Observable } from 'rxjs';
import { Timestamp, FieldValue, arrayUnion } from "firebase/firestore";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private afs: AngularFirestore) { }

  getChats() {
    return this.afs.collection('chatroom').snapshotChanges();
  }

  createChatRoom(data) {
    return this.afs.collection('chatroom').add(data);
  }

  showChat(id): Observable<Chats> {
    const chat = this.afs.doc<Chats>('chatroom/' + id);
    return chat.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data() as Chats;
          const chatId = changes.payload.id;
          return { chatId, ...data };
        }));
  }

  sendMessage(chatId, data) {
    return this.afs.collection('chatroom').doc(chatId).update({
      chatHistory: arrayUnion(data)
    });
  }

  updateChatStatus (chatId, history) {
    return this.afs.collection('chatroom').doc(chatId).update({
      chatHistory: history
    });
  }
}
