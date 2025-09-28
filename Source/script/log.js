function addMessage(message) {
  messages.push(message);
  if (processingMessages == false) {
    processMessages();
  }
}
function processMessages() {
  processingMessages = true;
  let message = messages.shift();
  setTimeout(function () {
    writeToLog(message);
    if (messages.length > 0) {
      processMessages();
    } else {
      processingMessages = false;
    }
  }, 800);
}
function writeToLog(message) {
  let logcontainer = document.querySelector(".logcontainer");
  let log = document.createElement("div");
  let header, body, choice, text;
  log.classList.add("log", message.voice);
  if (message.voice && message.voice != "input") {
    let header = document.createElement("div");
    text = document.createTextNode(voices[message.voice].name + ":");
    header.classList.add("header");
    header.appendChild(text);
    log.appendChild(header);
  }
  if (message.text) {
    let body = document.createElement("div");
    if (message.voice && message.voice != "input") {
      text = document.createTextNode("“" + message.text + "”");
    } else {
      text = document.createTextNode(message.text);
    }
    body.classList.add("text");
    body.appendChild(text);
    log.appendChild(body);
  }
  if (message.choices) {
    message.choices.forEach((item) => {
      let choice = document.createElement("div");
      text = document.createTextNode(item.text);
      choice.classList.add("choice", "active_link");
      choice.appendChild(text);
      choice.addEventListener("click", function () {
        removeActiveLinks();
        writeToLog({
          voice: "input",
          text: item.text,
        });
        item.action();
      });
      log.appendChild(choice);
    });
  }
  logcontainer.appendChild(log);
  log.scrollIntoView({
    behavior: "smooth",
    block: "end",
    container: "nearest",
    inline: "start",
  });
}
function newMessage(voice, content, choices, delay = 800, publish = false) {
  if (voice) {
    this.voice = voice;
  }
  if (content) {
    this.content = content;
  }
  if (choices) {
    this.choices = choices;
  }
  this.delay = delay;
  if (publish) {
    addMessage(this);
  }
  this.setVoice = function (voice) {
    this.voice = voice;
  };
  this.setContent = function (content) {
    this.content = content;
  };
  this.setChoices = function (choices) {
    this.choices = choices;
  };
  this.addChoice = function (choice) {
    if (this.choices == undefined) {
      this.choices = new Array();
    }
    this.choices.push(choice);
  };
  this.publish = function () {
    addMessage(this);
  };
  return this;
}