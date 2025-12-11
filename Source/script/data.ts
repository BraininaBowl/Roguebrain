const data_items = {
  example: {
    icon: "⍋",
    color: "--green-dim",
  },
};
const data_items_keys = Object.keys(data_items);

const data_voices = {
  Narrator: {
    name: "",
  },
};
const data_voices_keys = Object.keys(data_voices);
const data_chapters = {
  start: function () {
    /* Todo: migrate this to the new newMessage function */
    message = {};
    message.voice = false;
    message.text =
      "A gentle breeze flows through the clearing. Somewhere, a bird sings.";
    addMessage(message);
    message = {};
    message.choices = new Array();
    message.choices[1] = {
      text: "[Continue]",
      action: function () {
        /* Choice action here */
      },
    };
    addMessage(message);
  },
};
const data_chapters_keys = Object.keys(data_chapters);
