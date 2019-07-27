import {airtableMessages, getAirtableAssets} from '../airtable'
import translations from '../assets/translations.data.json';

// let fields;

// airtableAssets.find('recHqITRS7cBMwn9i', (err, record) => 
//    fields = record.fields
// )

async () => {
	await console.log(airtableMessages)
}

let assets;

async () => {
    assets = await getAirtableAssets()
}

let modifiedTranslations = translations;

const name = assets ?  assets.get('Name') : "Room"

modifiedTranslations.en.motto = airtableMessages && airtableMessages.get('Motto') || 'Learn together, from anywhere.\nThe future of learning is virtual.\nEqualizing access to premier quality education.';
modifiedTranslations.en["sign-in.rename-room"] = `You'll need to sign in to rename ${name}.`;
modifiedTranslations.en["sign-in.close-room"] = `You'll need to sign in to close ${name}.`;
modifiedTranslations.en["rename-room.message"] = `Enter the new name for ${name}.`;
modifiedTranslations.en["rename-room.rename"] = `Rename ${name}`;
modifiedTranslations.en["close-room.message"] =
  "Closing this room will remove yourself and others from ${name}, shutting it down permanently.\n\nAre you sure? This action cannot be undone.";
modifiedTranslations.en["close-room.confirm"] = `Yes, Close ${name}`;
modifiedTranslations.en["entry.leave-room"] = `Leave ${name}`;
modifiedTranslations.en["entry.in-lobby-notice"] = `You are viewing ${name} from the lobby.`;
modifiedTranslations.en["exit.subtitle.kicked"] = `You have been kicked from ${name}.`;
modifiedTranslations.en["exit.subtitle.left"] = `You have left ${name}.`;
modifiedTranslations.en["exit.subtitle.disconnected"] = `You have disconnected from ${name}. Refresh the page to try to reconnect.`;
modifiedTranslations.en["presence.entered_room"] = `entered ${name}.`;
modifiedTranslations.en["presence.entered_lobby"] = `entered ${name}'s lobby.`;
modifiedTranslations.en["presence.join_lobby"] = `joined the ${name} lobby.`;
modifiedTranslations.en["presence.join_room"] = `joined ${name}.`;
modifiedTranslations.en["presence.in_lobby"] = `${name} Lobby`;
modifiedTranslations.en["presence.in_room"] = `In ${name}`;
modifiedTranslations.en["home.create_a_room"] = `Initialize ${name}`;
modifiedTranslations.en["home.room_create_button"] = `Initialize ${name}`;
modifiedTranslations.en["home.have_code"] = `Have an ${name} code?`;
modifiedTranslations.en["commands.leave"] = `Disconnect from ${name}.`;
modifiedTranslations.en["settings.rename-room"] = `Set ${name} Name...`;
modifiedTranslations.en["settings.close-room"] = `Close ${name}...`;
modifiedTranslations.en["settings.room-info"] = `${name} Info`;
modifiedTranslations.en["settings.create-room"] = `New ${name}...`;
modifiedTranslations.en["settings.row-room"] = `${name}`;
modifiedTranslations.en["tips.mobile.object_pin"] = `Pin an object to save it to ${name}.`;
modifiedTranslations.en["tips.mobile.object_pin"] = `Pin an object to save it to ${name}.`;
modifiedTranslations.en["tips.mobile.invite"] = `Use the Invite button to share ${name}.`;
modifiedTranslations.en["tips.desktop.object_pin"] = `Pin an object to save it to ${name}.`;

export default modifiedTranslations;