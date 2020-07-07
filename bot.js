const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDU4NzM2NTQwMjg2MTg5NTY4.XtFc5w.idjrV5m-pu66s_kdyGA8d_j9XLg');
var memberWhoStartedLynchParty = "";
var memberWhoIsBeingLynched = "";

var messageContentLowerCase = "";

var isTimerActive = false;
var isLynchTimerActive = false;
var isLynchTimerActive2 = false;
var reasonForBeingLynched = "";

var messageToSend = "";

passiveAggressiveCommentToAdd = ["He won't be missed.", "What an idiot lmao.", "Thank god he's gone...", "damn!", "god I just couldn't stand him.", "Actually.... I really liked him. I thought he was a good guy. Can you guys pls reconsider? Just give him a second chance"];

function endTimer(reason) {
  if (reason === "Lynch") {
    isLynchTimerActive = false;
  }else if (reason === "Lynch2") {
    isLynchTimerActive2 = false;
  }else if (reason === "passive") {
    client.channels.cache.get("691882920415199235").send(passiveAggressiveCommentToAdd[getRandomInt(6)])
  }else if (reason === "sendmemes") {
    //sendRandomImageLink()
    console.log("end timer fired")
    setTimeout(endTimer("sendmemes"), 259200000);
  }
  isTimerActive = false;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sendRandomImageLink() {
  var linkArray =
    [
    "https://tenor.com/view/bike-penis-dick-cycling-gif-4638481",
    "https://tenor.com/view/fat-run-naked-gif-11230588",
    "https://media.giphy.com/media/s9kJXPK6jjoME/giphy.gif",
    "https://www.atr.org/sites/default/files/styles/medium/public/milton%20friedman%20blog.png?itok=2t0055FG",
    "https://pbs.twimg.com/media/DiQJ5AjX0AEU_X5.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/960859359391625160/CE3397A7F854D43BA22697051FC7CD4CADA284F4/",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/445/167/a5a.png"
  ];
  messageToSend = linkArray[getRandomInt(8)];
  client.channels.cache.get("691882920415199235").send(messageToSend);

}

var getFromBetween = {
  results:[],
  string:"",
  getFromBetween:function (sub1,sub2) {
      if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
      var SP = this.string.indexOf(sub1)+sub1.length;
      var string1 = this.string.substr(0,SP);
      var string2 = this.string.substr(SP);
      var TP = string1.length + string2.indexOf(sub2);
      return this.string.substring(SP,TP);
  },
  removeFromBetween:function (sub1,sub2) {
      if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
      var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
      this.string = this.string.replace(removal,"");
  },
  getAllResults:function (sub1,sub2) {
      // first check to see if we do have both substrings
      if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

      // find one result
      var result = this.getFromBetween(sub1,sub2);
      // push it to the results array
      this.results.push(result);
      // remove the most recently found one from the string
      this.removeFromBetween(sub1,sub2);

      // if there's more substrings
      if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
          this.getAllResults(sub1,sub2);
      }
      else return;
  },
  get:function (string,sub1,sub2) {
      this.results = [];
      this.string = string;
      this.getAllResults(sub1,sub2);
      return this.results;
  }
};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get("715819115436179458").bulkDelete(100);
});

client.on('message', function(msg) {
  console.log(msg.content);

  messageContentLowerCase = msg.content.toLowerCase();

   console.log(msg.createdTimestamp);
  if (msg.channel == 691883291774812280) {
    console.log(msg.content);
   // console.log(msg.createdTimestamp);
    client.channels.cache.get("715819115436179458").send(msg.content);
  }

  if (msg.channel == 715819115436179458) {
    console.log("Message sent in #minecraft");
    if (msg.content.includes("»")) {
      console.log("message contains >> ");
      msg.delete();
    }else if (msg.content.includes(" CDT INFO] [")) {
      if (!msg.content.includes(" >> ")) {
        msg.delete();
      }
    }
  }

  if (msg.channel == 715994669460226088) {
    if (messageContentLowerCase.includes(" issued server command: /say ")) {
      var messageContent = msg.content.replace("issued server command: /say", ">>"); 
      var messageContent2 = getFromBetween.get(messageContent, "INFO] ", "[");
      client.channels.cache.get("715819115436179458").send(messageContent2);
    }

    if ((messageContentLowerCase.includes("when is")) && (messageContentLowerCase.includes("nether"))) {

      if (!isTimerActive) {
        client.channels.cache.get("715819115436179458").send("nether update is coming sunday");
        setTimeout(endTimer(""), 6500);
        isTimerActive = true;
      }
    }

    if (messageContentLowerCase.includes("long dong silver's long schlong dildo emporium") && (messageContentLowerCase.includes("we're open so you can be too!"))) {
      if (!isTimerActive) {
        var playerThatSpammed = getFromBetween.get(msg.content, "<", ">")
        client.channels.cache.get("715819115436179458").send("NO SPAMMING.");
        client.channels.cache.get("715994669460226088").send("kick " + playerThatSpammed + "You have been kicked for spamming.");
        setTimeout(endTimer(""), 6500);
        isTimerActive = true;
      }
    }

    if (msg.content.includes("<Rekagan>")) {
      if ((messageContentLowerCase.includes("got")) || (messageContentLowerCase.includes("have")) ){
        if ((messageContentLowerCase.includes("i")) || (messageContentLowerCase.includes("my"))) {
          if (messageContentLowerCase.includes("emeralds")) {
            client.channels.cache.get("715819115436179458").send("ok tryhard lmao");
          }else if (messageContentLowerCase.includes("diamonds")) {
            client.channels.cache.get("715819115436179458").send("you are very good at minecraft");
          }else if (messageContentLowerCase.includes("netherite")) {
            client.channels.cache.get("715819115436179458").send("tryhard haha");
          }
        }
      }
      if ((messageContentLowerCase.includes("i'm")) || (messageContentLowerCase.includes("i am"))) {
        if (messageContentLowerCase.includes("the best")) {
          client.channels.cache.get("715819115436179458").send("Yes, you are the best. Here's a trophy! 🏆");
        }
      }
    }
  }

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (!msg.guild) return;

  if (msg.content.startsWith('!kick')) {
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {

         if ((msg.content.includes("<")) && (msg.content.includes(">"))) {
           reason = getFromBetween.get(msg.content, "<", ">");
           member
           .kick(reason)
           .then(() => {
            msg.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            msg.reply('I was unable to kick the member. Check my permissions.');
            console.error(err);
          });
         }
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            msg.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            msg.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        msg.reply("That user isn't in this guild!");
      }
    } else {
      msg.reply("You didn't tell me who to kick. Syntax is this: !kick user <reason>");
    }
  }

  if (!msg.guild) return;

  if (msg.content.startsWith('!ban')) {
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {

            msg.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {

            msg.reply('I was unable to ban the member');
            msg.channel.send(`Error Message: ${err}`);
            console.error(err);
          });
      } else {
        msg.reply("That user isn't in this server.");
      }
    } else {
      msg.reply("You need to tell me who to ban.");
    }
  }

  if (isLynchTimerActive) {

    if (msg.author == memberWhoStartedLynchParty) {
      isLynchTimerActive = false;
      memberWhoIsBeingLynched = msg.mentions.users.first();
      if (!memberWhoIsBeingLynched === "") {
        msg.channel.send("...and for what reason do you believe ${memberWhoIsBeingLynched} should be held at the mercy of God?");
        setTimeout(endTimer("Lynch2"), 60000);
        isLynchTimerActive2 = true;
      }else{
        msg.channel.send("Please specify a user next time.");
      }
    }
  }

  /*
  if (msg.content.includes("!lynch")) {
    if (member.roles.find(r => r.name === "Admin")) {
      msg.channel.send("Who would you like to start a lynch party against?");
      setTimeout(endTimer("Lynch"), 60000);
      isLynchTimerActive = true;
      memberWhoStartedLynchParty = msg.author
    }

  }else if (messageContentLowerCase.includes("lynch")) {
    msg.channel.send("Did I hear lynch? Say !lynch to start a lynch party.");
  }
  */

  if (messageContentLowerCase.includes("roast")) {
    if (!isTimerActive) {
      msg.channel.send("BOOM, ROASTED!!!");
      setTimeout(endTimer(""), 6500);
      isTimerActive = true;
    }
  }

  if (messageContentLowerCase.includes("or else")) {
    if (!isTimerActive) {
      msg.channel.send("Or else I'll eat ur face off.");
      setTimeout(endTimer(""), 6500);
      isTimerActive = true;
    }
  }

  if (msg.channel == 691882920415199235) {
    const randomInt = getRandomInt(21);
    if (randomInt == 0) {
      sendRandomImageLink();
    }
  }

  if (!isTimerActive) {
  if (messageContentLowerCase.includes("quoll")) {
    if ((messageContentLowerCase.includes("idiot")) || messageContentLowerCase.includes("dumb") || messageContentLowerCase.includes("stupid"))

    if (getRandomInt(3) == 0) {
      msg.channel.send("THE FUCK YOU SAY TO ME U LITTLE BITCH???");
      setTimeout(endTimer(""), 6500);
      isTimerActive = true;
    }
  }
}

  if (msg.content.includes("thats ours")) {
    msg.channel.send("https://steamuserimages-a.akamaihd.net/ugc/960859359391625160/CE3397A7F854D43BA22697051FC7CD4CADA284F4/");
    setTimeout(endTimer("commie"), 1500);
  }



});