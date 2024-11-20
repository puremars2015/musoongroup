
import { Component, OnInit } from '@angular/core';
import { MassengerService } from 'src/app/service/Massenger/massenger.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './massenger.component.html',
  styleUrls: ['./massenger.component.css']
})
export class MessengerComponent implements OnInit {
  
    constructor(service: MassengerService) { }
  
    ngOnInit(): void {
      // 打開對話框
      document.getElementById('chat-icon')?.addEventListener('click', function() {
        var chatbox = document.getElementById('chat-box');
        if (chatbox) {
          chatbox.style.display = 'block';
        }
      });

      // 關閉對話框
      document.getElementById('close-btn')?.addEventListener('click', function() {
        var chatbox = document.getElementById('chat-box');
        if (chatbox) {
          chatbox.style.display = 'none';
        }
      });

    }

    send() {
      const inputText = document.getElementById('chat-input') as HTMLInputElement;
      const chatbox = document.getElementById('chat-content');
      if (inputText && chatbox) {
        const message = inputText.value;
        inputText.value = '';
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
      }
    }

}
