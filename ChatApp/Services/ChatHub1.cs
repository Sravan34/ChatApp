using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Hubs
{
    public class ChatHub1 :Hub
    {
      public Task SendMessage(string user,string message)
        {
            return Clients.All.SendAsync("Sample Mess", user, message);
        }
    }
}
