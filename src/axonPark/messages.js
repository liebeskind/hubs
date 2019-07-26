import {airtableMessages} from '../airtable'
import translations from '../assets/translations.data.json';

// let fields;

// airtableAssets.find('recHqITRS7cBMwn9i', (err, record) => 
//    fields = record.fields
// )

async () => {
	await console.log(airtableMessages)
}

let modifiedTranslations = translations;

modifiedTranslations.en.motto = airtableMessages && airtableMessages.get('Motto') || 'Learn together, from anywhere.\nThe future of learning is virtual.\nEqualizing access to premier quality education.';
modifiedTranslations.en["sign-in.rename-room"] = "You'll need to sign in to rename axon park.";
modifiedTranslations.en["sign-in.close-room"] = "You'll need to sign in to close axon park.";
modifiedTranslations.en["rename-room.message"] = "Enter the new name for axon park.";
modifiedTranslations.en["rename-room.rename"] = "Rename Axon Park";
modifiedTranslations.en["close-room.message"] =
  "Closing this room will remove yourself and others from axon park, shutting it down permanently.\n\nAre you sure? This action cannot be undone.";
modifiedTranslations.en["close-room.confirm"] = "Yes, Close Axon Park";
modifiedTranslations.en["entry.leave-room"] = "Leave Axon Park";
modifiedTranslations.en["entry.in-lobby-notice"] = "You are viewing Axon Park from the lobby.";
modifiedTranslations.en["exit.subtitle.kicked"] = "You have been kicked from axon park.";
modifiedTranslations.en["exit.subtitle.left"] = "You have left axon park.";
modifiedTranslations.en["exit.subtitle.disconnected"] = "You have disconnected from axon park. Refresh the page to try to reconnect.";
modifiedTranslations.en["presence.entered_room"] = "entered axon park.";
modifiedTranslations.en["presence.entered_lobby"] = "entered axon park's lobby.";
modifiedTranslations.en["presence.join_lobby"] = "joined the axon park lobby.";
modifiedTranslations.en["presence.join_room"] = "joined axon park.";
modifiedTranslations.en["presence.in_lobby"] = "Axon Park Lobby";
modifiedTranslations.en["presence.in_room"] = "In Axon Park";
modifiedTranslations.en["home.create_a_room"] = "Initialize Axon Park";
modifiedTranslations.en["home.room_create_button"] = "Initialize Axon Park";
modifiedTranslations.en["home.have_code"] = "Have an axon park code?";
modifiedTranslations.en["commands.leave"] = "Disconnect from axon park.";
modifiedTranslations.en["settings.rename-room"] = "Set Axon Park Name...";
modifiedTranslations.en["settings.close-room"] = "Close Axon Park...";
modifiedTranslations.en["settings.room-info"] = "Axon Park Info";
modifiedTranslations.en["settings.create-room"] = "New Axon Park...";
modifiedTranslations.en["settings.row-room"] = "Axon Park";
modifiedTranslations.en["tips.mobile.object_pin"] = "Pin an object to save it to axon park.";
modifiedTranslations.en["tips.mobile.object_pin"] = "Pin an object to save it to axon park.";
modifiedTranslations.en["tips.mobile.invite"] = "Use the Invite button to share axon park.";
modifiedTranslations.en["tips.desktop.object_pin"] = "Pin an object to save it to axon park.";

export default modifiedTranslations;